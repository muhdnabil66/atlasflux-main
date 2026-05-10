"use client";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ContainerScroll";
import HeroAnimation from "@/components/HeroAnimation";
import NeuralFlow from "@/components/NeuralFlow";
import Link from "next/link";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { delay, duration: 0.6 },
});

const features = [
  {
    icon: "fas fa-brain",
    title: "200+ AI Models",
    desc: "Automatic selection across OpenRouter, Replicate & WaveSpeed.",
  },
  {
    icon: "fas fa-globe",
    title: "DeepSearch & Research",
    desc: "Live web search with citations, deep research up to 50 pages.",
  },
  {
    icon: "fas fa-microchip",
    title: "Reasoning & BigT",
    desc: "Chain‑of‑thought reasoning combined with web search.",
  },
  {
    icon: "fas fa-code",
    title: "Coding Mode",
    desc: "Premium programming models for debugging and generation.",
  },
  {
    icon: "fas fa-image",
    title: "Image & Video Gen",
    desc: "Hundreds of models for image/video creation, editing, and upscaling.",
  },
  {
    icon: "fas fa-music",
    title: "Music & Voice Cloning",
    desc: "Create songs, clone voices in 15 languages, separate audio.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO – ContainerScroll dengan NeuralFlow */}
      <section className="relative pt-24 md:pt-28">
        <ContainerScroll
          titleComponent={
            <div className="space-y-6 px-4">
              <motion.span
                {...fadeIn(0)}
                className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/70 text-xs md:text-sm font-medium"
              >
                ✦ 30 Free Daily Credits · 120 Bonus on Sign‑up
              </motion.span>
              <motion.h1
                {...fadeIn(0.1)}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
              >
                Intelligence{" "}
                <span className="text-white/40">without limits</span>
              </motion.h1>
              <motion.p
                {...fadeIn(0.2)}
                className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto"
              >
                200+ AI models. Chat, images, video, music, and more. All in one
                transparent platform.
              </motion.p>
              <motion.div
                {...fadeIn(0.3)}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="https://ai.atlasflux.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-neutral-200 transition"
                >
                  Start Exploring <i className="fas fa-arrow-right"></i>
                </a>
                <Link
                  href="/#features"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition"
                >
                  Discover Features
                </Link>
              </motion.div>
            </div>
          }
        >
          <NeuralFlow />
        </ContainerScroll>
      </section>

      {/* HERO ANIMATION – Demo interaktif */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div {...fadeIn(0)} className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              See it in <span className="text-white/40">action</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Watch how easy it is to chat, generate images, and create videos —
              all with one platform.
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto min-h-[650px] md:min-h-[800px] relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 md:py-32">
        <div className="container">
          <motion.div {...fadeIn(0)} className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Capabilities that <span className="text-white/40">elevate</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              No model names to memorize. Just powerful features that work.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fadeIn(i * 0.1)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 backdrop-blur-sm transition"
              >
                <div className="text-3xl text-white/40 mb-5">
                  <i className={f.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
                <p className="text-white/40">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA (tanpa Pricing) */}
      <section className="py-36 text-center">
        <motion.div {...fadeIn(0)} className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to go <span className="text-white/40">beyond</span>?
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Join thousands of creators, developers, and curious minds. Your 30
            free credits are waiting.
          </p>
          <a
            href="https://ai.atlasflux.my"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-10 py-5 rounded-full hover:bg-neutral-200 transition text-lg"
          >
            Launch App <i className="fas fa-rocket"></i>
          </a>
        </motion.div>
      </section>
    </>
  );
}
