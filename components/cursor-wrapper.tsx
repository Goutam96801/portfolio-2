"use client";

import CustomCursor from "./custom-cursor";
import { useSettings } from "@/providers/SettingsProvider";

export function CursorWrapper() {
  const { cursorUpgraded } = useSettings();

  if (!cursorUpgraded) return null;

  return <CustomCursor />;
}
