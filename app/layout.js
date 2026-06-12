// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AtlasFlux — Intelligence without limits",
  description: "400+ AI models. No subscriptions. Built different.",
  icons: {
    icon: "/assets/atlas.png",
    shortcut: "/assets/atlas.png",
    apple: "/assets/atlas.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/atlas.png" />
      </head>
      <body className="bg-[#0c0c0c] text-[#e8e4dc]">
        {/* Grain overlay — subtle texture */}
        <div className="grain" aria-hidden="true" />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
