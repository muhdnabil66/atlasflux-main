import "./global.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AtlasFlux – Free AI Platform with Grok 4.20 & More",
  description:
    "Access cutting‑edge AI for free: Grok 4.20 Multi‑Agent Beta, GPT‑5.4 Pro, Claude 4.6 Opus, DeepSeek R1, image vision, PDF scanner, and 30+ models. Get 30 daily credits – use for chat, DeepSearch, or image generation (Fast & Cheap 15⚡, Best Quality 30⚡, Ultra 50⚡).",
  keywords:
    "AI, Grok, GPT, Claude, DeepSeek, image generation, PDF scanner, free credits",
  openGraph: {
    title: "AtlasFlux – Free AI Platform with Grok 4.20 & More",
    description:
      "30 daily credits for chat, DeepSearch, and image generation. Grok 4.20, GPT‑5.4 Pro, Claude 4.6 Opus, DeepSeek R1, image vision, PDF scanner.",
    url: "https://atlasflux.my",
    siteName: "AtlasFlux",
    images: [
      {
        url: "https://atlasflux.my/assets/atlas.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/atlas-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0b0b" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <ScrollAnimations />
      </body>
    </html>
  );
}
