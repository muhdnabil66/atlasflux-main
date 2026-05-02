// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FallingPattern } from "@/components/FallingPattern";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AtlasFlux AI",
  description:
    "Access over 200 AI models for chat, images, video, music, and more. Start with 30 free daily credits. No subscription required.",
  keywords: [
    "AI platform",
    "free AI credits",
    "image generation",
    "video generation",
    "music AI",
  ],
  openGraph: {
    title: "AtlasFlux AI",
    description:
      "One platform, 200+ AI models. Chat, create images, generate music, and more. 30 free daily credits.",
    url: "https://atlasflux.my",
    siteName: "AtlasFlux",
    images: [{ url: "https://atlasflux.my/assets/atlas-og.png" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AtlasFlux AI",
    description: "200+ AI models, 30 free daily credits. No subscription.",
    images: ["https://atlasflux.my/assets/atlas-og.png"],
  },
  alternates: {
    canonical: "https://atlasflux.my",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/assets/atlas.png", // guna atlas.png
    shortcut: "/assets/atlas.png",
    apple: "/assets/atlas.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Pastikan favicon terus dipautkan */}
        <link rel="icon" href="/assets/atlas.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <FallingPattern
          color="rgba(255, 255, 255, 0.5)"
          backgroundColor="#000000"
          duration={160}
          blurIntensity="0.8em"
          density={1.2}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
