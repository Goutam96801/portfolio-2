"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMarkdown({ content }: { content: string }) {
  if (!content.trim()) return null;

  return (
    <div className="chat-markdown text-sm leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-bold text-ink">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 underline underline-offset-2 hover:text-orange-500 dark:text-orange-400"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;
            return (
              <span className="my-3 block overflow-hidden border-2 border-line bg-surface-muted shadow-[3px_3px_0px_0px_var(--shadow-solid)]">
                <Image
                  src={src}
                  alt={alt || "Goutam"}
                  width={400}
                  height={800}
                  className="h-auto max-h-72 object-contain"
                />
              </span>
            );
          },
          code: ({ children, className }) => {
            const isBlock = Boolean(className);
            if (isBlock) {
              return (
                <code className="my-2 block overflow-x-auto border border-line/30 bg-page p-2 font-mono text-xs">
                  {children}
                </code>
              );
            }
            return (
              <code className="border border-line/20 bg-page px-1 py-0.5 font-mono text-[0.85em]">
                {children}
              </code>
            );
          },
          h1: ({ children }) => (
            <h3 className="mb-2 text-base font-black">{children}</h3>
          ),
          h2: ({ children }) => (
            <h3 className="mb-2 text-base font-black">{children}</h3>
          ),
          h3: ({ children }) => (
            <h4 className="mb-1.5 text-sm font-bold">{children}</h4>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
