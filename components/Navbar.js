"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  {
    title: "AI Tools",
    items: [
      {
        label: "AI Image Generator",
        href: "https://ai.atlasflux.my/tools/ai-image",
      },
      {
        label: "Video Generation",
        href: "https://ai.atlasflux.my/tools/video-generation",
      },
      { label: "AI Music", href: "https://ai.atlasflux.my/tools/music" },
      {
        label: "Voice Cloning",
        href: "https://ai.atlasflux.my/tools/voice-cloning",
      },
      {
        label: "Audio Separation",
        href: "https://ai.atlasflux.my/tools/audio-separation",
      },
    ],
  },
  {
    title: "More Tools",
    items: [
      {
        label: "Face Restoration",
        href: "https://ai.atlasflux.my/tools/face-restoration",
      },
      {
        label: "Remove Background",
        href: "https://ai.atlasflux.my/tools/remove-background",
      },
      { label: "Upscaler", href: "https://ai.atlasflux.my/tools/upscaler" },
      {
        label: "Image to 3D",
        href: "https://ai.atlasflux.my/tools/image-to-3d",
      },
      {
        label: "Prompt Creator",
        href: "https://ai.atlasflux.my/tools/image-prompt",
      },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "AI Chat", href: "https://ai.atlasflux.my/chat" },
      { label: "All Tools", href: "https://ai.atlasflux.my/tools" },
      { label: "Documentation", href: "/docs" },
      { label: "Analytics", href: "https://ai.atlasflux.my/stats" },
      { label: "Explore Models", href: "https://ai.atlasflux.my/explore" },
      { label: "Updates", href: "https://ai.atlasflux.my/updates" },
    ],
  },
  {
    title: "Legal & Help",
    items: [
      {
        label: "Terms of Service",
        href: "https://ai.atlasflux.my/legal#terms-conditions",
      },
      {
        label: "Privacy Policy",
        href: "https://ai.atlasflux.my/legal#privacy-policy",
      },
      {
        label: "Refund Policy",
        href: "https://ai.atlasflux.my/legal#refund-policy",
      },
      { label: "Ban Policy", href: "https://ai.atlasflux.my/legal#ban-policy" },
      { label: "Contact", href: "https://ai.atlasflux.my/contact" },
    ],
  },
  {
    title: "Discover",
    items: [
      {
        label: "Pricing & Models",
        href: "https://ai.atlasflux.my/pricing/models",
      },
      { label: "Community", href: "https://ai.atlasflux.my/community" },
      { label: "Features", href: "/#features" },
      { label: "AI Models", href: "/models" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci skrol badan semasa menu dibuka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo – kiri */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl shrink-0"
        >
          <img
            src="/assets/atlas.png"
            alt="AtlasFlux"
            className="h-8 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="hidden sm:inline">AtlasFlux</span>
        </Link>

        {/* Tengah – Hanya ikon ChevronDown (Desktop & Mobile) */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Open menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </div>

        {/* Kanan – Butang Open App (mobile: ikon sahaja) */}
        <a
          href="https://ai.atlasflux.my"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-semibold px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-neutral-200 transition shrink-0 flex items-center gap-1"
        >
          <span className="hidden md:inline">Open App</span>
          <ArrowRight size={16} className="md:ml-1" />
        </a>
      </div>

      {/* Animasi Buka/Tutup Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 bottom-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto
                         md:absolute md:top-full md:bottom-auto md:max-h-[80vh] md:border-b md:border-white/10"
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                  {NAV_LINKS.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-white font-semibold mb-3 uppercase tracking-wide text-[10px]">
                        {category.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {category.items.map((item) => {
                          const isExternal = item.href.startsWith("http");
                          return (
                            <li key={item.label}>
                              {isExternal ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setMenuOpen(false)}
                                  className="text-neutral-400 hover:text-white transition-colors text-xs flex items-center gap-1.5 group"
                                >
                                  {item.label}
                                  <ExternalLink
                                    size={11}
                                    className="opacity-0 group-hover:opacity-50 transition-opacity"
                                  />
                                </a>
                              ) : (
                                <Link
                                  href={item.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-neutral-400 hover:text-white transition-colors text-xs"
                                >
                                  {item.label}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
