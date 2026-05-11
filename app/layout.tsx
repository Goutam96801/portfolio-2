import type { Metadata } from "next";
import { Kalam, Inter, Sora, JetBrains_Mono } from "next/font/google";
import GlobalClickSound from "@/components/global-click-sound";
import "./globals.css";
import InitialLoader from "@/components/InitialLoader";
import { LoaderProvider } from "@/providers/LoaderProvider";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Goutam | Software Developer",
    template: "%s | Goutam",
  },
  description: "A Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${inter.variable} ${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body>
        <LoaderProvider name="Goutam">

          <GlobalClickSound />

          {children}
        </LoaderProvider>
      </body>
    </html >
  );
}