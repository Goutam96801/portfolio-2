import { PlaygroundCanvas } from "@/components/playground/playground-canvas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "Find my things which is beyond portfolio",
};

export default function Playground() {
  return <PlaygroundCanvas />;
}
