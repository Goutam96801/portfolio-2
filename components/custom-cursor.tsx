"use client";

import { useEffect, useRef, useState } from "react";

const TOUCH_COOLDOWN_MS = 1000;
const IDLE_FADE_MS = 1200;
const RIGHT_CLICK_HINT_DELAY_MS = 1000;
const RIGHT_CLICK_HINT_VISIBLE_MS = 4000;
const HINT_SESSION_KEY = "portfolio:hint:right-click";

function DefaultCursorIcon() {
  return (
    <svg height="34" width="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6L29 19L20.5 21L25.5 31L20 33L15 23L8 29L10 6Z" fill="#000" opacity="0.8" />
      <path d="M6 2L25 15L16.5 17L21.5 27L16 29L11 19L4 25L6 2Z" fill="#FFDE59" stroke="#000" strokeWidth="2.5" strokeLinejoin="miter" />
      <path d="M11.5 10.5L19.5 15.5L15.5 16.5L18 22" stroke="#000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

function PointerCursorIcon() {
  return (
    <svg width="34" height="34" fill="none" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17V4.5C9 3.1 10.1 2 11.5 2S14 3.1 14 4.5V13V10.5C14 9.1 15.1 8 16.5 8S19 9.1 19 10.5V14V11.5C19 10.1 20.1 9 21.5 9S24 10.1 24 11.5V16V13.5C24 12.1 25.1 11 26.5 11S29 12.1 29 13.5V19C29 24.5 24.5 29 19 29H16.5C13.2 29 10.1 27.4 8.2 24.7L4.2 19C3.4 17.9 3.7 16.3 4.9 15.6C5.8 15.1 7 15.2 7.8 16L9 17Z" fill="#000" opacity="0.8" />
      <path d="M7 15V2.5C7 1.1 8.1 0 9.5 0S12 1.1 12 2.5V11V8.5C12 7.1 13.1 6 14.5 6S17 7.1 17 8.5V12V9.5C17 8.1 18.1 7 19.5 7S22 8.1 22 9.5V14V11.5C22 10.1 23.1 9 24.5 9S27 10.1 27 11.5V17C27 22.5 22.5 27 17 27H14.5C11.2 27 8.1 25.4 6.2 22.7L2.2 17C1.4 15.9 1.7 14.3 2.9 13.6C3.8 13.1 5 13.2 5.8 14L7 15Z" fill="#FFA33C" stroke="#000" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M12 11V15M17 12V15.5M22 14V17" stroke="#000" strokeWidth="2" strokeLinecap="square" />
      <path d="M8.5 4.5V10.5" stroke="#FFDE59" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isPointerRef = useRef(false);
  const hasMovedRef = useRef(false);
  const touchModeRef = useRef(false);
  const lastTouchAtRef = useRef(0);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem(HINT_SESSION_KEY) === "1";
    if (seen) {
      return;
    }

    let showTimeout: ReturnType<typeof setTimeout> | null = null;
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;
    let running = true;

    const stopHint = () => {
      running = false;
      if (showTimeout) clearTimeout(showTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
      setShowHint(false);
      window.sessionStorage.setItem(HINT_SESSION_KEY, "1");
      document.removeEventListener("contextmenu", onContextMenu);
    };

    const onContextMenu = () => stopHint();
    const maybeStart = () => {
      showTimeout = setTimeout(() => {
        if (!running) return;
        setShowHint(true);
        hideTimeout = setTimeout(() => stopHint(), RIGHT_CLICK_HINT_VISIBLE_MS);
      }, RIGHT_CLICK_HINT_DELAY_MS);
    };

    const poll = setInterval(() => {
      if (!running || !hasMovedRef.current || touchModeRef.current) return;
      clearInterval(poll);
      maybeStart();
      document.addEventListener("contextmenu", onContextMenu);
    }, 80);

    return () => {
      running = false;
      clearInterval(poll);
      if (showTimeout) clearTimeout(showTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  useEffect(() => {
    const wrapper = cursorRef.current;
    if (!wrapper) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrapper.style.display = "none";
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const noFine = !window.matchMedia("(any-pointer: fine)").matches;
    if (coarse && noFine) {
      touchModeRef.current = true;
      wrapper.style.display = "none";
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    const showCursor = () => {
      if (!touchModeRef.current && hasMovedRef.current) {
        wrapper.style.opacity = "1";
        document.body.classList.add("custom-cursor-active");
      }
    };

    const hideCursor = () => {
      wrapper.style.opacity = "0";
    };

    const disableCursor = () => {
      wrapper.style.display = "none";
      wrapper.style.opacity = "0";
      document.body.classList.remove("custom-cursor-active");
    };

    const onMouseEnter = () => {
      if (!touchModeRef.current) {
        hasMovedRef.current = true;
        showCursor();
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      const sinceTouch = Date.now() - lastTouchAtRef.current;
      const hasMovement = event.movementX !== 0 || event.movementY !== 0;
      if (sinceTouch < TOUCH_COOLDOWN_MS) return;

      if (touchModeRef.current && hasMovement) {
        touchModeRef.current = false;
        wrapper.style.display = "block";
      }

      if (touchModeRef.current) return;
      if (!hasMovedRef.current) hasMovedRef.current = true;

      wrapper.style.transform = `translate(${event.clientX - 7}px, ${event.clientY - 4}px)`;
      showCursor();

      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
        idleTimeoutRef.current = null;
      }

      if (document.body.getAttribute("data-cursor-idle") === "true") {
        idleTimeoutRef.current = setTimeout(hideCursor, IDLE_FADE_MS);
      }

      const target = event.target as HTMLElement | null;
      const pointerActive = !!(
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest('[role="button"]') ||
          target.classList.contains("cursor-pointer") ||
          target.closest(".cursor-pointer"))
      );

      if (isPointerRef.current !== pointerActive) {
        isPointerRef.current = pointerActive;
        const defaultEl = wrapper.querySelector<HTMLDivElement>(".cursor-default");
        const pointerEl = wrapper.querySelector<HTMLDivElement>(".cursor-pointer");

        if (defaultEl && pointerEl) {
          defaultEl.style.opacity = pointerActive ? "0" : "1";
          pointerEl.style.opacity = pointerActive ? "1" : "0";
        }
      }
    };

    const onMouseLeave = () => {
      if (hasMovedRef.current) hideCursor();
    };

    const onTouchStart = () => {
      lastTouchAtRef.current = Date.now();
      touchModeRef.current = true;
      disableCursor();
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true, capture: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("touchstart", onTouchStart, { capture: true });
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.body.classList.remove("custom-cursor-active");
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-wrapper"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 100000,
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
        willChange: "transform",
        transform: "translate(-100px, -100px)",
      }}
      role="presentation"
      aria-hidden="true"
    >
      <div className="cursor-default" style={{ position: "absolute", opacity: 1, transition: "opacity 0.2s ease" }}>
        <DefaultCursorIcon />
      </div>
      <div className="cursor-pointer" style={{ position: "absolute", opacity: 0, transition: "opacity 0.2s ease" }}>
        <PointerCursorIcon />
      </div>

      <div
        style={{
          position: "absolute",
          top: 28,
          left: 34,
          opacity: showHint ? 1 : 0,
          transform: "rotate(-2deg)",
          transition: "opacity 0.3s ease-in-out",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            position: "absolute",
            top: -8,
            left: 10,
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: "8px solid #000",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: -5,
            left: 12,
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderBottom: "6px solid #fff",
          }}
        />
        <span
          style={{
            display: "inline-block",
            background: "#fff",
            border: "2px solid #000",
            boxShadow: "3px 3px 0 0 #000",
            padding: "6px 10px",
            fontSize: 12,
            fontWeight: 500,
            color: "#000",
            lineHeight: 1,
            fontFamily: "inherit",
          }}
        >
          try right-clicking
        </span>
      </div>
    </div>
  );
}
