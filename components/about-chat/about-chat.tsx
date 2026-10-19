"use client";

import { Bot, ChevronDown, Loader2, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useId, useRef, useState } from "react";
import ChatMarkdown from "@/components/about-chat/chat-markdown";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  thinking?: string;
  streaming?: boolean;
  thinkingExpanded?: boolean;
  suggestions?: string[];
};

const PROFILE_PHOTOS = ["/gallary/profile.png", "/gallary/profile1.webp"];

const SUGGESTIONS = [
  "What should I look at first in your portfolio?",
  "Tell me about your Mono internship story",
  "Which projects use Next.js?",
  "Show me a photo of Goutam",
];

const FALLBACK_FOLLOWUPS = [
  "Show me a photo of Goutam",
  "What are his strongest skills?",
  "How can I contact him?",
];

const WELCOME =
  "Hey — I'm **Goutam's portfolio guide**. Ask about his work, projects, skills, or story.";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function wantsPhoto(question: string) {
  return /\b(photo|picture|pic|pics|image|images|selfie|look like|looks like|appearance|face)\b/i.test(
    question,
  );
}

function stripSuggestionDraft(raw: string) {
  const marker = raw.search(/<<<suggestions>>>/i);
  if (marker === -1) return raw;
  return raw.slice(0, marker).trimEnd();
}

function parseSuggestions(raw: string): { content: string; suggestions: string[] } {
  const match = raw.match(/<<<suggestions>>>\s*([\s\S]*?)\s*<<<end>>>/i);
  if (!match) {
    return { content: stripSuggestionDraft(raw).trim(), suggestions: [] };
  }

  const suggestions = match[1]
    .split("\n")
    .map((line) => line.replace(/^[-*•\d.)\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, 3);

  const content = raw.replace(match[0], "").trim();
  return { content, suggestions };
}

function ensureProfilePhotos(content: string) {
  const missing = PROFILE_PHOTOS.filter((path) => !content.includes(path));
  if (missing.length === 0) return content;

  const images = missing
    .map((path) => `![Goutam](${path})`)
    .join("\n\n");
  return `${content}\n\n${images}`.trim();
}

function ThinkingBlock({
  thinking,
  streaming,
  expanded,
  onToggle,
}: {
  thinking: string;
  streaming?: boolean;
  expanded: boolean;
  onToggle: () => void;
}) {
  const hasThoughts = thinking.trim().length > 0;
  const label =
    streaming && !hasThoughts
      ? "Thinking…"
      : streaming
        ? "Thinking"
        : "Thought process";

  return (
    <div className="mb-2 border border-line/25 bg-page/70">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 px-2.5 py-1.5 text-left text-xs text-ink-muted transition-colors hover:bg-surface-muted/60"
        aria-expanded={expanded}
      >
        <span className="inline-flex items-center gap-1.5 font-medium">
          {streaming && <Loader2 size={12} className="animate-spin" />}
          {label}
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="max-h-40 overflow-y-auto border-t border-line/20 px-2.5 py-2 text-xs leading-relaxed whitespace-pre-wrap text-ink-muted">
          {hasThoughts ? thinking : "Gathering context from the portfolio dossier…"}
        </div>
      )}
    </div>
  );
}

export default function AboutChat() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", content: WELCOME },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, pending, open]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  function patchAssistant(
    id: string,
    patch: Partial<ChatMessage> | ((current: ChatMessage) => Partial<ChatMessage>),
  ) {
    setMessages((current) =>
      current.map((message) => {
        if (message.id !== id) return message;
        const nextPatch = typeof patch === "function" ? patch(message) : patch;
        return { ...message, ...nextPatch };
      }),
    );
  }

  async function sendMessage(raw: string) {
    const content = raw.trim();
    if (!content || pending) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content,
    };
    const assistantId = createId();
    const historyForApi = [...messages, userMessage]
      .filter((message) => message.id !== "welcome")
      .map(({ role, content: text }) => ({ role, content: text }));

    setMessages((current) => [
      ...current.map((message) =>
        message.role === "assistant" ? { ...message, suggestions: undefined } : message,
      ),
      userMessage,
      {
        id: assistantId,
        role: "assistant",
        content: "",
        thinking: "",
        streaming: true,
        thinkingExpanded: true,
      },
    ]);
    setInput("");
    setError(null);
    setPending(true);

    try {
      const response = await fetch("/api/about-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyForApi }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        const fallback = await response.json().catch(() => null);
        throw new Error(fallback?.error || "Something went wrong.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let gotText = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;

          let event: { type?: string; text?: string; error?: string };
          try {
            event = JSON.parse(trimmed);
          } catch {
            continue;
          }

          if (event.type === "thought" && event.text) {
            patchAssistant(assistantId, (current) => ({
              thinking: `${current.thinking || ""}${event.text}`,
            }));
          }

          if (event.type === "text" && event.text) {
            gotText = true;
            patchAssistant(assistantId, (current) => ({
              content: `${current.content || ""}${event.text}`,
              thinkingExpanded: false,
            }));
          }

          if (event.type === "error") {
            throw new Error(event.error || "Stream failed.");
          }
        }
      }

      patchAssistant(assistantId, (current) => {
        let nextContent =
          current.content.trim() ||
          "I don't have a reply for that. Try another question.";

        const parsed = parseSuggestions(nextContent);
        nextContent = parsed.content;

        if (wantsPhoto(content)) {
          nextContent = ensureProfilePhotos(nextContent);
        }

        const suggestions =
          parsed.suggestions.length > 0
            ? parsed.suggestions
            : FALLBACK_FOLLOWUPS.slice(0, 3);

        return {
          streaming: false,
          thinkingExpanded: Boolean(current.thinking?.trim()) && !gotText,
          content: nextContent,
          suggestions,
        };
      });
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        patchAssistant(assistantId, { streaming: false });
        return;
      }

      const message =
        err instanceof Error ? err.message : "Could not reach the chat service.";
      setError(message);
      patchAssistant(assistantId, {
        streaming: false,
        thinkingExpanded: false,
        content: `Sorry — ${message}`,
        suggestions: FALLBACK_FOLLOWUPS.slice(0, 3),
      });
    } finally {
      setPending(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  const latestAssistant = [...messages]
    .reverse()
    .find((message) => message.role === "assistant" && !message.streaming);

  return (
    <>
      <button
        type="button"
        data-sound="on"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[60] flex max-w-[min(100vw-2.5rem,18rem)] items-center gap-3 border-2 border-line bg-orange-400 px-3 py-3 text-left text-black shadow-[4px_4px_0px_0px_var(--shadow-solid)] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ink md:bottom-7 md:right-7"
      >
        <span className="flex size-10 shrink-0 items-center justify-center border-2 border-black bg-surface text-ink">
          <Bot size={20} aria-hidden />
        </span>
        <span className="min-w-0 pr-1">
          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-black/70">
            Chat
          </span>
          <span className="block truncate text-sm font-semibold leading-tight">
            Ask about me
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-stretch justify-center bg-black/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="flex h-dvh w-full max-w-3xl flex-col border-0 border-line bg-page text-ink shadow-none sm:h-[min(860px,92dvh)] sm:border-2 sm:shadow-[8px_8px_0px_0px_var(--shadow-solid)]"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between gap-3 border-b-2 border-line bg-surface px-4 py-3 md:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center border-2 border-line bg-orange-400 text-black">
                  <Bot size={20} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h2 id={titleId} className="truncate text-base font-black md:text-lg">
                    Ask about Goutam
                  </h2>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center border-2 border-line bg-surface text-ink transition-colors hover:bg-orange-400 hover:text-black"
              >
                <X size={18} />
              </button>
            </header>

            <div
              ref={listRef}
              className="flex-1 space-y-4 overflow-y-auto px-4 py-5 md:px-5"
            >
              {messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  <div
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[92%] border-2 border-line px-3.5 py-2.5 md:max-w-[80%] ${
                        message.role === "user"
                          ? "bg-orange-400 text-black shadow-[3px_3px_0px_0px_var(--shadow-solid)]"
                          : "bg-surface text-ink shadow-[3px_3px_0px_0px_var(--shadow-solid)]"
                      }`}
                    >
                      {message.role === "assistant" &&
                        (message.streaming || Boolean(message.thinking?.trim())) && (
                          <ThinkingBlock
                            thinking={message.thinking || ""}
                            streaming={message.streaming}
                            expanded={Boolean(message.thinkingExpanded)}
                            onToggle={() =>
                              patchAssistant(message.id, {
                                thinkingExpanded: !message.thinkingExpanded,
                              })
                            }
                          />
                        )}

                      {message.role === "user" ? (
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">
                          {message.content}
                        </p>
                      ) : message.content ? (
                        <ChatMarkdown
                          content={
                            message.streaming
                              ? stripSuggestionDraft(message.content)
                              : message.content
                          }
                        />
                      ) : message.streaming ? null : (
                        <p className="text-sm text-ink-muted">No reply yet.</p>
                      )}
                    </div>
                  </div>

                  {message.role === "assistant" &&
                    !message.streaming &&
                    message.id !== "welcome" &&
                    message.suggestions &&
                    message.suggestions.length > 0 &&
                    message.id === latestAssistant?.id && (
                      <div className="flex max-w-[92%] flex-wrap gap-2 md:max-w-[80%]">
                        {message.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            disabled={pending}
                            onClick={() => void sendMessage(suggestion)}
                            className="inline-flex items-center gap-1.5 border-2 border-line bg-surface-muted px-3 py-2 text-left text-xs font-medium text-ink transition-colors hover:bg-orange-400 hover:text-black disabled:opacity-60"
                          >
                            <Sparkles size={12} />
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      disabled={pending}
                      onClick={() => void sendMessage(suggestion)}
                      className="inline-flex items-center gap-1.5 border-2 border-line bg-surface-muted px-3 py-2 text-left text-xs font-medium text-ink transition-colors hover:bg-orange-400 hover:text-black disabled:opacity-60"
                    >
                      <Sparkles size={12} />
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={onSubmit}
              className="border-t-2 border-line bg-surface p-3 md:p-4"
            >
              {error && (
                <p className="mb-2 text-xs text-red-600 dark:text-red-400">{error}</p>
              )}
              <div className="relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendMessage(input);
                    }
                  }}
                  rows={2}
                  maxLength={2000}
                  placeholder="Ask anything about Goutam…"
                  className="min-h-14 w-full resize-none border-2 border-line bg-page py-2.5 pl-3 pr-14 text-sm text-ink outline-none placeholder:text-ink-muted focus:border-orange-400"
                />
                <button
                  type="submit"
                  disabled={pending || !input.trim()}
                  aria-label="Send message"
                  className="absolute right-2 top-1/2 flex aspect-square h-1/2 max-h-8 min-h-7 -translate-y-1/2 items-center justify-center border-2 border-line bg-orange-400 text-black transition-colors hover:bg-ink hover:text-page disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {pending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                </button>
              </div>
              <p className="mt-2 text-[11px] text-ink-muted">
                Enter to send · Shift+Enter for a new line · Esc to close
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
