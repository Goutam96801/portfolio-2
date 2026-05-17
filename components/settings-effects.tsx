"use client";

import { useEffect } from "react";
import { useSettings } from "@/providers/SettingsProvider";

export function SettingsEffects() {
  const { cursorUpgraded, isMuted } = useSettings();

  // Hide default cursor when custom cursor is active
  useEffect(() => {
    if (cursorUpgraded) {
      document.documentElement.style.cursor = "none";
    } else {
      document.documentElement.style.cursor = "auto";
    }
  }, [cursorUpgraded]);

  return null;
}
