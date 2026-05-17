"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, RotateCcw, ArrowLeft, Volume2, Zap } from "lucide-react";
import { useSettings } from "@/providers/SettingsProvider";

interface MenuPosition {
  x: number;
  y: number;
}

export function ContextMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<MenuPosition>({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { cursorUpgraded, isMuted, toggleCursor, toggleMute } = useSettings();

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
    };

    const handleClick = () => {
      setIsOpen(false);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleUpgradeCursor = () => {
    toggleCursor();
    setIsOpen(false);
  };

  const handleMuteSounds = () => {
    toggleMute();
    setIsOpen(false);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    router.back();
    setIsOpen(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed z-50 min-w-48 overflow-hidden rounded-lg border-2 border-black bg-white shadow-xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-8px, -8px)",
      }}
    >
      <button
        onClick={handleUpgradeCursor}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-yellow-100 active:bg-yellow-200"
      >
        <Zap size={18} strokeWidth={2} />
        <span>{cursorUpgraded ? "Disable cursor" : "Upgrade cursor"}</span>
      </button>

      <button
        onClick={handleMuteSounds}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-orange-100 active:bg-orange-200"
      >
        <Volume2 size={18} strokeWidth={2} />
        <span>{isMuted ? "Unmute sounds" : "Mute sounds"}</span>
      </button>

      <div className="mx-2 my-1 border-t-2 border-dashed border-stone-300" />

      <button
        onClick={handleReload}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-blue-100 active:bg-blue-200"
      >
        <RotateCcw size={18} strokeWidth={2} />
        <span>Reload page</span>
      </button>

      <button
        onClick={handleGoBack}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-stone-100 active:bg-stone-200"
      >
        <ArrowLeft size={18} strokeWidth={2} />
        <span>Go back</span>
      </button>

      <button
        onClick={handleCopyLink}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-green-100 active:bg-green-200"
      >
        <Copy size={18} strokeWidth={2} />
        <span>Copy link</span>
      </button>
    </div>
  );
}
