import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Latif Kalkan — Portfolio";
const description =
  "Portfolio von Latif Kalkan, Fachinformatiker-Azubi Anwendungsentwicklung mit Fokus auf Backend-Entwicklung und KI-Agenten-Workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Latif Kalkan",
    "Fachinformatiker Anwendungsentwicklung",
    "Backend Developer",
    "Next.js",
    "Supabase",
    "Claude Code",
    "Mannheim",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: title,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/cover.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
