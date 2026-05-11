import useSound from "use-sound";

export function useClickSound() {
  const [play] = useSound("/sounds/click-sound.wav", {
    volume: 0.1,
    playbackRate: 10,
    interrupt: true,
  });

  return play;
}