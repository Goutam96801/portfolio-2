"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, ready } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      data-sound="on"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={toggleTheme}
      className={`inline-flex size-9 items-center justify-center border-2 border-line bg-surface text-ink shadow-[2px_2px_0px_0px_var(--shadow-solid)] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-orange-400 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ink ${className}`}
    >
      {!ready ? (
        <Sun size={16} className="opacity-40" aria-hidden />
      ) : isDark ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
    </button>
  );
}
