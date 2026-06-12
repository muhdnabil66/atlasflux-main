"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_SECTIONS = [
  {
    title: "Platform",
    links: [
      {
        label: "AI Chat",
        href: "https://ai.atlasflux.my/chat",
        external: true,
      },
      {
        label: "All Tools",
        href: "https://ai.atlasflux.my/tools",
        external: true,
      },
      { label: "Models", href: "/models" },
      { label: "Docs", href: "/docs" },
      { label: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Tools",
    links: [
      {
        label: "Image Gen",
        href: "https://ai.atlasflux.my/tools/ai-image",
        external: true,
      },
      {
        label: "Video",
        href: "https://ai.atlasflux.my/tools/video-generation",
        external: true,
      },
      {
        label: "Music",
        href: "https://ai.atlasflux.my/tools/music",
        external: true,
      },
      {
        label: "Voice",
        href: "https://ai.atlasflux.my/tools/voice-cloning",
        external: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms",
        href: "https://ai.atlasflux.my/legal#terms-conditions",
        external: true,
      },
      {
        label: "Privacy",
        href: "https://ai.atlasflux.my/legal#privacy-policy",
        external: true,
      },
      {
        label: "Contact",
        href: "https://ai.atlasflux.my/contact",
        external: true,
      },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Fixed sidebar on desktop */}
      <nav className="fixed left-0 top-0 h-full w-16 md:w-20 border-r border-[#2a2a2a] bg-[#0c0c0c] z-50 flex flex-col items-center py-6 hidden lg:flex">
        {/* Logo */}
        <Link href="/" className="mb-12">
          <img
            src="/assets/atlas.png"
            alt="AtlasFlux"
            className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* 2-line hamburger → X simetri */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-[14px] relative flex flex-col justify-between">
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="block w-6 h-[2px] bg-[#e8e4dc] origin-center"
            />
            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="block w-6 h-[2px] bg-[#e8e4dc] origin-center"
            />
          </div>
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA vertical */}
        <a
          href="https://ai.atlasflux.my"
          target="_blank"
          rel="noopener noreferrer"
          className="writing-vertical text-xs font-mono text-[#6b6560] hover:text-[#e85d04] transition-colors tracking-widest"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          OPEN APP →
        </a>
      </nav>

      {/* Mobile top bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 border-b border-[#2a2a2a] bg-[#0c0c0c] z-50 flex items-center justify-between px-4 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/atlas.png"
            alt="AtlasFlux"
            className="w-6 h-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="font-bold text-sm tracking-tight">AtlasFlux</span>
        </Link>

        {/* 2-line hamburger → X simetri (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center relative"
          aria-label="Toggle menu"
        >
          <div className="w-[18px] h-[10px] relative flex flex-col justify-between">
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 4 : 0,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="block w-[18px] h-[2px] bg-[#e8e4dc] origin-center"
            />
            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -4 : 0,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="block w-[18px] h-[2px] bg-[#e8e4dc] origin-center"
            />
          </div>
        </button>
      </nav>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0c0c0c] lg:pl-20"
          >
            <div className="h-full flex flex-col lg:flex-row">
              {/* Left: Navigation */}
              <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                  {NAV_SECTIONS.map((section, idx) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                    >
                      <h3 className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-6">
                        {section.title}
                      </h3>
                      <ul className="space-y-4">
                        {section.links.map((link) => (
                          <li key={link.label}>
                            {link.external ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                                className="group flex items-baseline gap-2 text-2xl lg:text-3xl font-medium text-[#e8e4dc] hover:text-[#e85d04] transition-colors"
                              >
                                <span className="strike-hover">
                                  {link.label}
                                </span>
                                <span className="text-xs font-mono text-[#6b6560] opacity-0 group-hover:opacity-100 transition-opacity">
                                  ↗
                                </span>
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-2xl lg:text-3xl font-medium text-[#e8e4dc] hover:text-[#e85d04] transition-colors strike-hover"
                              >
                                {link.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Big text + CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="lg:w-[400px] border-t lg:border-t-0 lg:border-l border-[#2a2a2a] p-8 lg:p-12 flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-4">
                    Current Status
                  </p>
                  <div className="flex items-center gap-2 mb-8">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-sm">
                      All systems operational
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    400+
                    <br />
                    <span className="text-[#6b6560]">models</span>
                    <br />
                    waiting.
                  </p>
                  <a
                    href="https://ai.atlasflux.my"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="inline-block w-full py-4 bg-[#e85d04] text-[#0c0c0c] font-bold text-center text-lg hover-lift"
                  >
                    Launch App →
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
