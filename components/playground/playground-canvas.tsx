"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";
import { Certification } from "./certification";
import { Photos } from "./photos";
import { Experiences } from "./experiences";

const MIN_ZOOM = 0.4;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.1;
const DEFAULT_ZOOM = 0.65;

const CANVAS_WIDTH = 2900;
const CANVAS_HEIGHT = 900;

type SectionId = "certifications" | "photos" | "experiences";

export function PlaygroundCanvas() {
  const router = useRouter();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("experiences");
  

  const panStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const zoomRef = useRef(zoom);
  const panRef = useRef(pan);
  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);
  useEffect(() => {
    panRef.current = pan;
  }, [pan]);

  const clampZoom = (z: number) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));

  const centerOn = useCallback(
    (canvasX: number, canvasY: number, targetZoom = zoomRef.current) => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const rect = viewport.getBoundingClientRect();
      setZoom(targetZoom);
      setPan({
        x: rect.width / 2 - canvasX * targetZoom,
        y: rect.height / 2 - canvasY * targetZoom,
      });
    },
    [],
  );

  const scrollToSection = useCallback(
    (id: SectionId) => {
      const el = document.getElementById(id);
      if (!el) return;
      const cx = el.offsetLeft + el.offsetWidth / 2;
      const cy = el.offsetTop + el.offsetHeight / 2;
      centerOn(cx, cy);
      setActiveSection(id);
    },
    [centerOn],
  );

  // initial centering + hash support
  useEffect(() => {
    const hash =
      typeof window !== "undefined"
        ? (window.location.hash.replace("#", "") as SectionId)
        : "";
    requestAnimationFrame(() => {
      if (hash === "certifications" || hash === "photos" || hash === "experiences") {
        scrollToSection(hash);
      } else {
        scrollToSection("experiences");
      }
    });
  }, [scrollToSection]);

  // wheel / trackpad-pinch zoom, anchored at cursor
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;
      const z = zoomRef.current;
      const p = panRef.current;

      const factor = e.ctrlKey ? 0.01 : 0.0015;
      const newZoom = clampZoom(z * Math.exp(-e.deltaY * factor));
      const canvasX = (cursorX - p.x) / z;
      const canvasY = (cursorY - p.y) / z;

      setZoom(newZoom);
      setPan({
        x: cursorX - canvasX * newZoom,
        y: cursorY - canvasY * newZoom,
      });
    };
    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    setIsPanning(true);
    panStart.current = {
      x: e.clientX,
      y: e.clientY,
      panX: panRef.current.x,
      panY: panRef.current.y,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    setPan({
      x: panStart.current.panX + (e.clientX - panStart.current.x),
      y: panStart.current.panY + (e.clientY - panStart.current.y),
    });
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    setIsPanning(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const zoomAtCenter = (delta: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect();
    const cursorX = rect.width / 2;
    const cursorY = rect.height / 2;
    const z = zoomRef.current;
    const p = panRef.current;
    const newZoom = clampZoom(Math.round((z + delta) * 100) / 100);
    const canvasX = (cursorX - p.x) / z;
    const canvasY = (cursorY - p.y) / z;
    setZoom(newZoom);
    setPan({
      x: cursorX - canvasX * newZoom,
      y: cursorY - canvasY * newZoom,
    });
  };

  const zoomIn = () => zoomAtCenter(ZOOM_STEP);
  const zoomOut = () => zoomAtCenter(-ZOOM_STEP);
  const resetView = () => {
    setZoom(DEFAULT_ZOOM);
    requestAnimationFrame(() => scrollToSection("experiences"));
  };

  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-page">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-3 md:px-6 md:py-4 pointer-events-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between pointer-events-auto">
          <button
            className="group flex items-center gap-2 rounded-full border border-line/30 bg-surface/95 px-3 py-2 shadow-md backdrop-blur-sm transition-all hover:shadow-lg md:px-4"
            onClick={() => router.back()}
          >
            <ArrowLeft size={15} />
            <span className="text-sm font-medium text-ink-soft">Back</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-line/30 bg-surface/95 px-3 py-2 shadow-md backdrop-blur-sm md:px-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-yellow-500"
              >
                <path d="M12 3l2 7h7l-5.5 4.5L17 21l-5-4-5 4 1.5-6.5L3 10h7l2-7z" />
                <circle cx="6" cy="6" r="1" fill="currentColor" />
                <circle cx="18" cy="5" r="1" fill="currentColor" />
                <circle cx="19" cy="18" r="1" fill="currentColor" />
              </svg>
              <span className="text-sm font-medium text-ink-soft">Playground</span>
            </div>
            <ThemeToggle className="!rounded-full size-9 shadow-md" />
          </div>
        </div>
      </header>

      <div
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={cn(
          "relative flex-1 overflow-hidden touch-none select-none",
          isPanning ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--page-dot) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left will-change-transform"
          style={{
            width: `${CANVAS_WIDTH}px`,
            height: `${CANVAS_HEIGHT}px`,
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
          }}
        >
          <div className="absolute left-12.5 top-30">
            <div className="w-64 rounded-xl border-2 border-line/30 bg-surface p-5 shadow-lg">
              <h3 className="mb-2 font-handwritten text-lg text-ink">
                Welcome!
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                Drag to pan. Scroll or pinch to zoom.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-700">
                  1 → Experiences
                </span>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                  2 → Certifications
                </span>
                <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700">
                  3 → Photos
                </span>
              </div>
            </div>
          </div>

          <Experiences />
          <Certification />
          <Photos />
        </div>
      </div>

      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-surface/95 backdrop-blur-md rounded-2xl shadow-lg border border-line/30 pointer-events-auto">
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              className="p-2 hover:bg-surface-muted rounded-xl transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
              title="Zoom out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-ink-muted"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
                <line x1="8" x2="14" y1="11" y2="11" />
              </svg>
            </button>
            <div className="px-2.5 py-1 bg-surface-muted rounded-lg min-w-12 text-center">
              <span className="text-xs font-mono font-medium text-ink-muted">
                {Math.round(zoom * 100)}%
              </span>
            </div>
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              className="p-2 hover:bg-surface-muted rounded-xl transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
              title="Zoom in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-ink-muted"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
                <line x1="11" x2="11" y1="8" y2="14" />
                <line x1="8" x2="14" y1="11" y2="11" />
              </svg>
            </button>
            <div className="w-px h-5 bg-line/30 mx-1" />
            <button
              type="button"
              onClick={resetView}
              className="p-2 hover:bg-surface-muted rounded-xl transition-colors"
              title="Reset view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-ink-muted"
              >
                <path d="M15 3h6v6" />
                <path d="m21 3-7 7" />
                <path d="m3 21 7-7" />
                <path d="M9 21H3v-6" />
              </svg>
            </button>
            <div className="w-px h-5 bg-line/30 mx-1" />
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollToSection("experiences")}
                className={cn(
                  "px-2 py-1 text-xs font-medium rounded-lg transition-colors",
                  activeSection === "experiences"
                    ? "bg-yellow-100 text-yellow-700"
                    : "text-ink-muted hover:bg-yellow-100 hover:text-yellow-700",
                )}
              >
                Experiences
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("certifications")}
                className={cn(
                  "px-2 py-1 text-xs font-medium rounded-lg transition-colors",
                  activeSection === "certifications"
                    ? "bg-green-100 text-green-700"
                    : "text-ink-muted hover:bg-green-100 hover:text-green-700",
                )}
              >
                Certifications
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("photos")}
                className={cn(
                  "px-2 py-1 text-xs font-medium rounded-lg transition-colors",
                  activeSection === "photos"
                    ? "bg-purple-100 text-purple-700"
                    : "text-ink-muted hover:bg-purple-100 hover:text-purple-700",
                )}
              >
                Photos
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
