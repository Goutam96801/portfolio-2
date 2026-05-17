"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorType, setCursorType] = useState<
    "default" | "pointer" | "text"
  >("default");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target as HTMLElement;

      // Text cursor
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        setCursorType("text");
        return;
      }

      // Pointer cursor
      const computedStyle = window.getComputedStyle(target);

      if (
        computedStyle.cursor === "pointer" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorType("pointer");
        return;
      }

      setCursorType("default");
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-99999"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* DEFAULT CURSOR */}
      {cursorType === "default" && (
        <div className="relative">
          <div
            className="h-0 w-0 border-b-24 border-l-14 border-r-14
            border-b-yellow-400 border-l-transparent border-r-transparent
            -rotate-45 drop-shadow-md"
          />

          <div
            className="absolute left-[2px] top-[2px] h-0 w-0
            border-b-[20px] border-l-[12px] border-r-[12px]
            border-b-black border-l-transparent border-r-transparent
            rotate-[-45deg]"
          />
        </div>
      )}

      {/* POINTER CURSOR */}
      {cursorType === "pointer" && (
        <div className="h-5 w-5 rounded-full border-2 border-black bg-yellow-400" />
      )}

      {/* TEXT CURSOR */}
      {cursorType === "text" && (
        <div className="h-6 w-[2px] bg-black" />
      )}
    </div>
  );
}