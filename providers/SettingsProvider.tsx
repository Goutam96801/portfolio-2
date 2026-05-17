"use client";

import { createContext, useContext, useState } from "react";

interface SettingsContextType {
  cursorUpgraded: boolean;
  isMuted: boolean;
  toggleCursor: () => void;
  toggleMute: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cursorUpgraded, setCursorUpgraded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleCursor = () => {
    setCursorUpgraded((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <SettingsContext.Provider
      value={{
        cursorUpgraded,
        isMuted,
        toggleCursor,
        toggleMute,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }

  return context;
}