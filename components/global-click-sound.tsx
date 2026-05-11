"use client";

import { useEffect } from "react";
import useSound from "use-sound";

export default function GlobalClickSound() {
  const [play] = useSound("/sounds/click-sound.wav", {
    volume: 0.1,
    playbackRate: 1,
    interrupt: true,
  });

  useEffect(() => {
    const handleClick = () => {
      play();
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [play]);

  return null;
}