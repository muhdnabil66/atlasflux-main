"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroAnimation from "@/components/HeroAnimation";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
});

const features = [
  {
    num: "01",
    title: "400+ AI Models",
    desc: "Automatic selection across OpenRouter, Replicate & WaveSpeed. We pick the best, you just ask.",
    size: "large", // asymmetric sizing
  },
  {
    num: "02",
    title: "DeepSearch",
    desc: "Live web search with citations. Deep research up to 50 pages.",
    size: "small",
  },
  {
    num: "03",
    title: "Reasoning",
    desc: "Chain-of-thought reasoning combined with real-time web search.",
    size: "small",
  },
  {
    num: "04",
    title: "Image & Video",
    desc: "Hundreds of models for creation, editing, and upscaling.",
    size: "medium",
  },
  {
    num: "05",
    title: "Music & Voice",
    desc: "Create songs, clone voices in 15 languages, separate audio.",
    size: "small",
  },
  {
    num: "06",
    title: "Coding Mode",
    desc: "Premium programming models for debugging and generation.",
    size: "medium",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Asymmetric, oversized typography */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 lg:pt-0 lg:pl-20">
        <div className="px-6 lg:px-16 max-w-[1400px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-mono text-xs text-[#6b6560] uppercase tracking-[0.2em]">
              AtlasFlux AI Platform
            </span>
          </motion.div>

          {/* Main headline — broken into lines for asymmetric feel */}
          <div className="space-y-2 lg:space-y-4 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-6xl sm:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold leading-[0.9] tracking-tighter"
            >
              Intelligence
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-6xl sm:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold leading-[0.9] tracking-tighter text-[#6b6560]"
            >
              without
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-6xl sm:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold leading-[0.9] tracking-tighter"
            >
              <span className="underline-accent">limits</span>
            </motion.h1>
          </div>

          {/* Subhead + CTAs — offset to the right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:ml-[20%] max-w-xl"
          >
            <p className="text-lg lg:text-xl text-[#6b6560] mb-8 leading-relaxed">
              400+ AI models. Chat, images, video, music. No subscriptions. No
              model names to memorize. Just ask and get answers.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://ai.atlasflux.my"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#e85d04] text-[#0c0c0c] font-bold px-8 py-4 text-sm hover-lift"
              >
                Start Exploring
                <span className="font-mono">→</span>
              </a>
              <Link
                href="/#features"
                className="inline-flex items-center gap-3 border-2 border-[#2a2a2a] text-[#e8e4dc] font-bold px-8 py-4 text-sm hover:border-[#e8e4dc] hover-lift transition-colors"
              >
                Discover Features
              </Link>
            </div>

            {/* Stats row — raw, unpolished */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-[#2a2a2a]">
              <div>
                <p className="text-3xl font-bold">30</p>
                <p className="font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                  Free Credits Daily
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">400+</p>
                <p className="font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                  AI Models
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">0</p>
                <p className="font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                  Subscriptions
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative element — offset, asymmetric */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 right-8 lg:right-16 font-mono text-xs text-[#2a2a2a] hidden lg:block"
        >
          <pre className="leading-tight">
            {`┌─────────────────┐
│  NEURAL ENGINE  │
│    ACTIVE       │
│  v2.4.1-stable  │
└─────────────────┘`}
          </pre>
        </motion.div>
      </section>

      {/* MARQUEE — raw, industrial */}
      <div className="border-y border-[#2a2a2a] py-4 overflow-hidden bg-[#111]">
        <div className="marquee">
          <div className="marquee-content font-mono text-sm text-[#6b6560] uppercase tracking-widest">
            Chat • Image • Video • Music • Voice • Code • Research • Analysis •
            Chat • Image • Video • Music • Voice • Code • Research • Analysis •
          </div>
        </div>
      </div>

      {/* DEMO SECTION — Terminal aesthetic */}
      <section className="py-24 lg:py-32 lg:pl-20">
        <div className="px-6 lg:px-16">
          <motion.div {...fadeIn(0)} className="mb-16">
            <span className="font-mono text-xs text-[#6b6560] uppercase tracking-[0.2em] block mb-4">
              Interactive Demo
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              See it <span className="text-[#6b6560]">break</span> things.
            </h2>
          </motion.div>

          <motion.div
            {...fadeIn(0.2)}
            className="border-2 border-[#2a2a2a] bg-[#111] overflow-hidden"
            style={{ minHeight: "600px" }}
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </section>

      {/* FEATURES — Asymmetric bento grid */}
      <section id="features" className="py-24 lg:py-32 lg:pl-20">
        <div className="px-6 lg:px-16 max-w-[1400px]">
          <motion.div {...fadeIn(0)} className="mb-20">
            <span className="font-mono text-xs text-[#6b6560] uppercase tracking-[0.2em] block mb-4">
              Capabilities
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-2xl">
              No model names to memorize. Just powerful features.
            </h2>
          </motion.div>

          {/* Bento grid — intentional asymmetry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.map((f, i) => {
              // Determine grid span based on size
              const spanClass =
                f.size === "large"
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                  : f.size === "medium"
                    ? "md:col-span-1 lg:col-span-1"
                    : "";

              return (
                <motion.div
                  key={i}
                  {...fadeIn(i * 0.1)}
                  className={`group border-2 border-[#2a2a2a] bg-[#111] p-6 lg:p-8 hover:border-[#e85d04] transition-colors duration-300 ${spanClass}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-xs text-[#6b6560]">
                      {f.num}
                    </span>
                    <span className="w-8 h-8 border border-[#2a2a2a] group-hover:border-[#e85d04] group-hover:bg-[#e85d04] flex items-center justify-center transition-all">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-[#6b6560] group-hover:text-[#0c0c0c]"
                      >
                        <path
                          d="M1 11L11 1M11 1H3M11 1V9"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </div>

                  <h3
                    className={`font-bold mb-3 ${f.size === "large" ? "text-2xl lg:text-3xl" : "text-xl"}`}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[#6b6560] leading-relaxed">{f.desc}</p>

                  {f.size === "large" && (
                    <div className="mt-8 pt-6 border-t border-[#2a2a2a]">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-[#e85d04]" />
                        <span className="font-mono text-xs text-[#6b6560]">
                          Auto-routing enabled
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION — Raw, high contrast */}
      <section className="py-32 lg:py-48 lg:pl-20 bg-[#f5f1e8] text-[#0c0c0c]">
        <div className="px-6 lg:px-16 max-w-[1400px]">
          <motion.div {...fadeIn(0)} className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6560] block mb-6">
              Ready?
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Your 30 free credits are waiting.
            </h2>
            <p className="text-lg text-[#6b6560] mb-12 max-w-xl">
              Join thousands of creators, developers, and curious minds. No
              credit card. No subscription trap.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://ai.atlasflux.my"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0c0c0c] text-[#f5f1e8] font-bold px-8 py-4 text-sm hover:bg-[#e85d04] hover:text-[#0c0c0c] transition-colors"
              >
                Launch App
                <span className="font-mono">→</span>
              </a>
              <Link
                href="/models"
                className="inline-flex items-center gap-3 border-2 border-[#0c0c0c] text-[#0c0c0c] font-bold px-8 py-4 text-sm hover:bg-[#0c0c0c] hover:text-[#f5f1e8] transition-colors"
              >
                Browse Models
              </Link>
            </div>
          </motion.div>

          {/* Decorative — offset, raw */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-24 pt-8 border-t-2 border-[#0c0c0c]"
          >
            <div className="flex justify-between items-end">
              <div className="font-mono text-xs text-[#6b6560]">
                <p>ATLASFLUX AI PLATFORM</p>
                <p>v2.4.1-stable</p>
              </div>
              <div className="text-right">
                <p className="text-6xl lg:text-8xl font-bold opacity-10">30</p>
                <p className="font-mono text-xs text-[#6b6560]">
                  FREE CREDITS DAILY
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
