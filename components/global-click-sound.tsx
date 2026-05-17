"use client";

import { useEffect } from "react";
import useSound from "use-sound";
import { useSettings } from "@/providers/SettingsProvider";

export default function GlobalClickSound() {
  const [play] = useSound("/sounds/click-sound.wav", {
    volume: 0.1,
    playbackRate: 1,
    interrupt: true,
  });
  const { isMuted } = useSettings();

  useEffect(() => {
    if (isMuted) return;

    const handleClick = () => {
      play();
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [play, isMuted]);

  return null;
}