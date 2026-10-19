import { ABOUT_CHAT_SYSTEM_INSTRUCTION } from "@/data/about-dossier";

export const runtime = "nodejs";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const MAX_MESSAGES = 24;
const MAX_CONTENT_LENGTH = 2000;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const message = value as ChatMessage;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.trim().length > 0 &&
    message.content.length <= MAX_CONTENT_LENGTH
  );
}

function encodeEvent(payload: Record<string, unknown>) {
  return `${JSON.stringify(payload)}\n`;
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(
      encodeEvent({
        type: "error",
        error: "Chat is not configured yet. Add GEMINI_API_KEY to the server env.",
      }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/x-ndjson; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
        },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(encodeEvent({ type: "error", error: "Invalid JSON body." }), {
      status: 400,
      headers: { "Content-Type": "application/x-ndjson; charset=utf-8" },
    });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(
      encodeEvent({ type: "error", error: "messages array is required." }),
      {
        status: 400,
        headers: { "Content-Type": "application/x-ndjson; charset=utf-8" },
      },
    );
  }

  if (messages.length > MAX_MESSAGES) {
    return new Response(
      encodeEvent({ type: "error", error: `Send at most ${MAX_MESSAGES} messages.` }),
      {
        status: 400,
        headers: { "Content-Type": "application/x-ndjson; charset=utf-8" },
      },
    );
  }

  if (!messages.every(isChatMessage)) {
    return new Response(encodeEvent({ type: "error", error: "Invalid message shape." }), {
      status: 400,
      headers: { "Content-Type": "application/x-ndjson; charset=utf-8" },
    });
  }

  const typedMessages = messages as ChatMessage[];
  if (typedMessages[typedMessages.length - 1]?.role !== "user") {
    return new Response(
      encodeEvent({ type: "error", error: "Last message must be from the user." }),
      {
        status: 400,
        headers: { "Content-Type": "application/x-ndjson; charset=utf-8" },
      },
    );
  }

  const contents = typedMessages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content.trim() }],
  }));

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse`;

  let geminiResponse: Response;
  try {
    geminiResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: ABOUT_CHAT_SYSTEM_INSTRUCTION }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
          thinkingConfig: {
            includeThoughts: true,
          },
        },
      }),
    });
  } catch {
    return new Response(
      encodeEvent({
        type: "error",
        error: "Could not reach Gemini. Try again in a moment.",
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/x-ndjson; charset=utf-8" },
      },
    );
  }

  if (!geminiResponse.ok || !geminiResponse.body) {
    const payload = await geminiResponse.json().catch(() => null);
    const detail =
      payload?.error?.message ||
      `Gemini request failed (${geminiResponse.status}).`;
    return new Response(encodeEvent({ type: "error", error: detail }), {
      status: 502,
      headers: { "Content-Type": "application/x-ndjson; charset=utf-8" },
    });
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let buffer = "";
  let sawText = false;
  let sawThought = false;

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = geminiResponse.body!.getReader();

      const push = (payload: Record<string, unknown>) => {
        controller.enqueue(encoder.encode(encodeEvent(payload)));
      };

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const chunks = buffer.split("\n");
          buffer = chunks.pop() || "";

          for (const line of chunks) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;

            const data = trimmed.slice(5).trim();
            if (!data || data === "[DONE]") continue;

            let payload: {
              candidates?: Array<{
                content?: {
                  parts?: Array<{ text?: string; thought?: boolean }>;
                };
              }>;
              error?: { message?: string };
            };

            try {
              payload = JSON.parse(data);
            } catch {
              continue;
            }

            if (payload.error?.message) {
              push({ type: "error", error: payload.error.message });
              controller.close();
              return;
            }

            const parts = payload.candidates?.[0]?.content?.parts || [];
            for (const part of parts) {
              const text = part.text || "";
              if (!text) continue;

              if (part.thought) {
                sawThought = true;
                push({ type: "thought", text });
              } else {
                sawText = true;
                push({ type: "text", text });
              }
            }
          }
        }

        if (!sawText && !sawThought) {
          push({
            type: "error",
            error: "Gemini returned an empty reply. Try rephrasing.",
          });
        } else {
          push({ type: "done" });
        }
      } catch {
        push({
          type: "error",
          error: "Stream interrupted. Please try again.",
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
