"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo – tanpa invert, guna brightness+invert untuk pastikan putih */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <img
            src="/assets/atlas.png"
            alt="AtlasFlux"
            className="h-8 w-auto"
            style={{ filter: "brightness(0) invert(1)" }} /* paksa putih */
          />
          <span className="hidden sm:inline">AtlasFlux</span>{" "}
          {/* sembunyikan teks pada mobile sangat kecil */}
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/#features"
            className="text-gray-300 hover:text-white transition text-xs md:text-sm font-medium hidden sm:inline"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-gray-300 hover:text-white transition text-xs md:text-sm font-medium hidden sm:inline"
          >
            Pricing
          </Link>
          <a
            href="https://ai.atlasflux.my"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-4 py-2 rounded-full text-xs md:text-sm hover:bg-neutral-200 transition"
          >
            Open App{" "}
            <i className="fas fa-arrow-right ml-1 text-[10px] md:text-xs"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
