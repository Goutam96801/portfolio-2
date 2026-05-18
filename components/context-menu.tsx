"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, RotateCcw, ArrowLeft, Volume2, Zap, MousePointer2, VolumeX, Check, Link } from "lucide-react";
import { useSettings } from "@/providers/SettingsProvider";

interface MenuPosition {
  x: number;
  y: number;
}

export function ContextMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [position, setPosition] = useState<MenuPosition>({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { cursorUpgraded, isMuted, toggleCursor, toggleMute } = useSettings();

  useEffect(() => {
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();

    setPosition({
      x: e.clientX,
      y: e.clientY,
    });

    setIsOpen(true);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("mousedown", handleOutsideClick);
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

const handleCopyLink = async () => {
  await navigator.clipboard.writeText(window.location.href);

  setIsLinkCopied(true);

  setTimeout(() => {
    setIsLinkCopied(false);
    setIsOpen(false);
  }, 2000);
};

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      onClick={(e) => e.stopPropagation()}
      className="fixed z-50 min-w-48 overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-8px, -8px)",
      }}
    >
      <button
        onClick={handleUpgradeCursor}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-yellow-200 "
      >
        <MousePointer2 size={18} strokeWidth={2} />
        <span>{cursorUpgraded ? "Default cursor" : "Upgrade cursor"}</span>
      </button>

      <button
        onClick={handleMuteSounds}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-orange-400"
      >
        {
          isMuted ? <VolumeX size={18} strokeWidth={2} /> : <Volume2 size={18} strokeWidth={2} />
        }

        <span>{isMuted ? "Unmute sounds" : "Mute sounds"}</span>
      </button>

      <div className="mx-2 my-1 border-t-2 border-dashed border-stone-300" />

      <button
        onClick={handleReload}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-cyan-400 "
      >
        <RotateCcw size={18} strokeWidth={2} />
        <span>Reload page</span>
      </button>

      <button
        onClick={handleGoBack}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-stone-400"
      >
        <ArrowLeft size={18} strokeWidth={2} />
        <span>Go back</span>
      </button>

      <button
        onClick={handleCopyLink}
        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-green-400 "
      >
        {
          isLinkCopied ? <Check size={18} strokeWidth={2} /> : <Link size={18} strokeWidth={2} />
        }
        <span>{isLinkCopied ? "Copied" : "Copy link"}</span>
      </button>
    </div>
  );
}
