import type { Metadata } from "next";
import { Kalam, Inter, Sora, JetBrains_Mono } from "next/font/google";
import GlobalClickSound from "@/components/global-click-sound";
import { ContextMenu } from "@/components/context-menu";
import { CursorWrapper } from "@/components/cursor-wrapper";
import { SettingsEffects } from "@/components/settings-effects";
import "./globals.css";
import InitialLoader from "@/components/InitialLoader";
import { LoaderProvider } from "@/providers/LoaderProvider";
import { SettingsProvider } from "@/providers/SettingsProvider";
import { PostHogProvider } from "@/providers/PosthogProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

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
  other: {
    "google-adsense-account": "ca-pub-1465231291661963",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${kalam.variable} ${inter.variable} ${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}else{document.documentElement.style.colorScheme='light'}}catch(e){}})();`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1465231291661963"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-page text-ink">
        <PostHogProvider>
          <ThemeProvider>
            <SettingsProvider>
              <LoaderProvider name="Goutam">
                <SettingsEffects />
                <GlobalClickSound />
                <ContextMenu />
                <CursorWrapper />
                {children}
              </LoaderProvider>
            </SettingsProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}