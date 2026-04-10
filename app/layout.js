import "./global.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AtlasFlux – Premium AI Ecosystem | Free Daily Credits",
  description:
    "Experience advanced AI capabilities with transparent credit system. Web research, intelligent coding, file analysis, creative studio, and 30 free daily credits. Built with precision by AtlasFlux.",
  keywords:
    "AI platform, web research, coding assistant, image generation, music generator, free AI credits, Malaysia developer",
  openGraph: {
    title: "AtlasFlux – Premium AI Ecosystem",
    description:
      "Web research, coding, file analysis, and creative AI tools with 30 free daily credits. Professional-grade, transparent, and built with care.",
    url: "https://atlasflux.my",
    siteName: "AtlasFlux",
    images: [
      {
        url: "https://atlasflux.my/assets/atlas-og.png",
        width: 1200,
        height: 630,
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
        <meta name="theme-color" content="#030303" />
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
