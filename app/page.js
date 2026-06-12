"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import HeroAnimation from "@/components/HeroAnimation";

// ============================================================================
// CONTINUOUS HELIX — Single canvas spanning entire page, absolute positioned
// ============================================================================
function ContinuousHelix({ mousePos, scrollProgress }) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w, h;
    const resize = () => {
      // Canvas fills the entire scrollable container
      const parent = canvas.parentElement;
      if (!parent) return;
      w = canvas.width = parent.offsetWidth * window.devicePixelRatio;
      h = canvas.height = parent.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const strands = 2;
    const nodesPerStrand = 120; // Dense for full page
    const baseRadius = 55;

    let animId;

    const draw = () => {
      const displayW = canvas.offsetWidth;
      const displayH = canvas.offsetHeight;

      // Smooth values
      targetMouseRef.current.x +=
        (mousePos.x - targetMouseRef.current.x) * 0.04;
      targetMouseRef.current.y +=
        (mousePos.y - targetMouseRef.current.y) * 0.04;
      scrollRef.current += (scrollProgress - scrollRef.current) * 0.05;

      const mx = targetMouseRef.current.x;
      const my = targetMouseRef.current.y;
      const sp = scrollRef.current;

      // Trail fade
      ctx.fillStyle = "rgba(12, 12, 12, 0.1)";
      ctx.fillRect(0, 0, displayW, displayH);

      timeRef.current += 0.008;
      const t = timeRef.current;

      // Helix center follows cursor X, fixed Y center of viewport
      const centerX = displayW * (0.3 + mx * 0.4);
      const tightness = 0.12 + sp * 0.05;
      const dynamicRadius = baseRadius + Math.abs(mx - 0.5) * 50;

      // Draw strands continuously across FULL page height
      for (let strand = 0; strand < strands; strand++) {
        const strandOffset = strand * Math.PI;

        ctx.beginPath();
        const points = [];

        for (let i = 0; i < nodesPerStrand; i++) {
          const progress = i / (nodesPerStrand - 1);
          // y goes from 0 to full displayH (entire page)
          const y = progress * displayH;

          const wave1 = Math.sin(i * tightness + t * 2) * 30;
          const wave2 = Math.sin(i * 0.3 - t * 1.5) * 15;
          const wave3 = Math.cos(i * 0.1 + t * 0.5) * 20;

          // Cursor attraction — stronger at cursor Y position
          const cursorYInfluence =
            1 - Math.min(1, Math.abs(y / displayH - my) * 3);
          const cursorAttractionX = (mx - 0.5) * 200 * cursorYInfluence;

          const x =
            centerX +
            Math.sin(i * tightness + t * 1.2 + strandOffset) * dynamicRadius +
            wave1 +
            wave2 +
            wave3 +
            cursorAttractionX;

          points.push({ x, y, i, progress });

          if (i === 0) ctx.moveTo(x, y);
          else {
            const prev = points[i - 1];
            const cpx = (prev.x + x) / 2;
            const cpy = (prev.y + y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
          }
        }

        const last = points[points.length - 1];
        ctx.lineTo(last.x, last.y);

        ctx.strokeStyle =
          strand === 0 ? `rgba(232, 93, 4, 0.2)` : `rgba(0, 245, 212, 0.2)`;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Nodes
        for (let i = 0; i < points.length; i++) {
          const pt = points[i];
          const heartbeat = Math.sin(t * 2.5 + i * 0.3) * 0.3 + 0.7;
          const size = (2 + Math.sin(i * 0.5 + t * 1.5) * 1) * heartbeat;

          const dx = pt.x - mx * displayW;
          const dy = pt.y - my * displayH;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const brightness = Math.max(0, 1 - dist / 200);

          // Glow
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, size * 3, 0, Math.PI * 2);
          const glowAlpha = (0.03 + brightness * 0.06) * heartbeat;
          ctx.fillStyle =
            strand === 0
              ? `rgba(232, 93, 4, ${glowAlpha})`
              : `rgba(0, 245, 212, ${glowAlpha})`;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
          const coreAlpha = (0.4 + brightness * 0.4) * heartbeat;
          ctx.fillStyle =
            strand === 0
              ? `rgba(232, 93, 4, ${coreAlpha})`
              : `rgba(0, 245, 212, ${coreAlpha})`;
          ctx.fill();
        }
      }

      // Cross-links
      for (let i = 0; i < nodesPerStrand; i += 2) {
        const progress = i / (nodesPerStrand - 1);
        const y = progress * displayH;

        const wave1 = Math.sin(i * tightness + t * 2) * 30;
        const wave2 = Math.sin(i * 0.3 - t * 1.5) * 15;
        const wave3 = Math.cos(i * 0.1 + t * 0.5) * 20;

        const cursorYInfluence =
          1 - Math.min(1, Math.abs(y / displayH - my) * 3);
        const cursorAttractionX = (mx - 0.5) * 200 * cursorYInfluence;

        const x1 =
          centerX +
          Math.sin(i * tightness + t * 1.2) * dynamicRadius +
          wave1 +
          wave2 +
          wave3 +
          cursorAttractionX;
        const x2 =
          centerX +
          Math.sin(i * tightness + t * 1.2 + Math.PI) * dynamicRadius +
          wave1 +
          wave2 +
          wave3 +
          cursorAttractionX;

        ctx.beginPath();
        ctx.moveTo(x1, y);
        const midX = (x1 + x2) / 2;
        const midY = y + Math.sin(t * 1.5 + i) * 6;
        ctx.quadraticCurveTo(midX, midY, x2, y);

        const gradient = ctx.createLinearGradient(x1, y, x2, y);
        gradient.addColorStop(0, "rgba(232, 93, 4, 0.1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.03)");
        gradient.addColorStop(1, "rgba(0, 245, 212, 0.1)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Cursor particles
      const particleCount = 10;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + t * 0.5;
        const dist = 20 + Math.sin(t * 2 + i) * 10;
        const px = mx * displayW + Math.cos(angle) * dist;
        const py = my * displayH + Math.sin(angle) * dist;

        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 93, 4, ${0.2 + Math.sin(t * 2 + i) * 0.1})`;
        ctx.fill();
      }

      // Energy bursts
      if (Math.random() < 0.003) {
        const burstX = Math.random() * displayW;
        const burstY = Math.random() * displayH;
        const burstSize = 30 + Math.random() * 50;
        ctx.beginPath();
        ctx.arc(burstX, burstY, burstSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 93, 4, ${0.01 + Math.random() * 0.015})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mousePos, scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ touchAction: "none" }}
    />
  );
}

// ============================================================================
// FEATURE NODE
// ============================================================================
function HelixNode({ num, title, desc, delay, index, total }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: delay * 0.12, duration: 0.5, ease: "easeOut" }}
      className="absolute z-20"
      style={{
        left: `${8 + (index % 2) * 78}%`,
        top: `${5 + ((index + 1) / (total + 2)) * 90}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          scale: hovered ? 1.5 : [1, 1.15, 1],
          boxShadow: hovered
            ? "0 0 25px rgba(232, 93, 4, 0.5)"
            : [
                "0 0 0px rgba(232, 93, 4, 0)",
                "0 0 15px rgba(232, 93, 4, 0.25)",
                "0 0 0px rgba(232, 93, 4, 0)",
              ],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
          hovered ? "bg-[#e85d04]" : "bg-[#1a1a1a] border-2 border-[#333]"
        }`}
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? 20 : -20, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${index % 2 === 0 ? "left-7" : "right-7"} top-0 w-64 bg-[#0a0a0a]/95 backdrop-blur-md border border-[#e85d04]/30 p-4 z-30`}
            style={{ boxShadow: "0 0 30px rgba(232, 93, 4, 0.08)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] text-[#e85d04] uppercase tracking-widest">
                {String(num).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-[#e85d04]/20" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-white">{title}</h3>
            <p className="text-xs text-[#888] leading-relaxed">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================================
// MAGNETIC CTA
// ============================================================================
function MagneticCTA({ mousePos }) {
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef(null);

  const getMagneticOffset = () => {
    if (!buttonRef.current || !hovered) return { x: 0, y: 0 };
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = mousePos.x * window.innerWidth;
    const mouseY = mousePos.y * window.innerHeight;

    const dist = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
    const maxDist = 250;

    if (dist > maxDist) return { x: 0, y: 0 };

    const force = (1 - dist / maxDist) * 25;
    return {
      x: ((mouseX - centerX) / dist) * force,
      y: ((mouseY - centerY) / dist) * force,
    };
  };

  const magnetic = getMagneticOffset();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center z-20 relative"
    >
      <a
        href="https://ai.atlasflux.my"
        target="_blank"
        rel="noopener noreferrer"
        ref={buttonRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group inline-block relative"
        style={{
          transform: `translate(${magnetic.x}px, ${magnetic.y}px)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, opacity: hovered ? 0.25 : 0 }}
          className="absolute inset-0 bg-[#e85d04] rounded-2xl blur-3xl"
        />

        <motion.div
          animate={{ scale: hovered ? 1.03 : 1 }}
          className="relative px-14 py-7 bg-[#0a0a0a]/90 backdrop-blur-sm border-2 border-[#e85d04]/40 rounded-2xl overflow-hidden"
          style={{
            boxShadow: hovered
              ? "0 0 50px rgba(232, 93, 4, 0.25), inset 0 0 25px rgba(232, 93, 4, 0.08)"
              : "0 0 15px rgba(232, 93, 4, 0.08)",
          }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#e85d04_360deg)]"
              style={{ opacity: hovered ? 0.4 : 0.15 }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: hovered ? -3 : 0 }}
              className="text-4xl mb-1"
            >
              🧬
            </motion.div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-white tracking-tight">
                Enter AtlasFlux
              </span>
              <motion.span
                animate={{ x: hovered ? 6 : 0, scale: hovered ? 1.15 : 1 }}
                className="text-2xl text-[#e85d04]"
              >
                →
              </motion.span>
            </div>
            <span className="font-mono text-[9px] text-[#666] uppercase tracking-[0.3em]">
              AI System Portal
            </span>
          </div>

          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(232,93,4,0.08)_50%,transparent_100%)]"
          />
        </motion.div>

        <AnimatePresence>
          {hovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 0.8, 0],
                    x: (Math.random() - 0.5) * 180,
                    y: (Math.random() - 0.5) * 180,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, delay: i * 0.08 }}
                  className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-[#e85d04]"
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </a>
    </motion.div>
  );
}

// ============================================================================
// MAIN HOMEPAGE — Continuous helix background, all sections transparent
// ============================================================================
export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", setScrollValue);
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const handle = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const features = [
    {
      num: 1,
      title: "400+ Models",
      desc: "Auto-routing across providers with intelligent load balancing and fallback mechanisms",
    },
    {
      num: 2,
      title: "DeepSearch",
      desc: "Live web crawling with real-time citations and source verification",
    },
    {
      num: 3,
      title: "Reasoning",
      desc: "Chain-of-thought reasoning combined with multi-step search capabilities",
    },
    {
      num: 4,
      title: "Image & Video",
      desc: "Create, edit, upscale and transform visual content with AI precision",
    },
    {
      num: 5,
      title: "Music & Voice",
      desc: "15 languages support with stem separation and voice cloning",
    },
    {
      num: 6,
      title: "Coding Mode",
      desc: "Debug, generate and refactor code across 50+ programming languages",
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-[400vh]">
      {/* CONTINUOUS HELIX — Absolute, spans full page height */}
      <ContinuousHelix mousePos={mousePos} scrollProgress={scrollValue} />

      {/* SECTION 1: HERO — Transparent, helix visible behind */}
      <section className="relative h-screen overflow-hidden z-10">
        <div className="absolute inset-0 flex items-end pb-20 lg:pb-32 lg:pl-20 pointer-events-none">
          <div className="px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="font-mono text-[10px] text-[#e85d04] uppercase tracking-[0.3em]">
                AtlasFlux AI
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-2 text-white drop-shadow-lg">
                Living Intelligence
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <span className="w-2 h-2 rounded-full bg-[#e85d04] animate-pulse" />
                <span className="font-mono text-[10px] text-[#888]">
                  System active — Move cursor to interact
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-[#333] relative overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-full h-1/2 bg-[#e85d04]"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: DEMO — Glass on top of helix */}
      <section className="relative min-h-screen flex items-center justify-center z-10 py-24">
        <div className="w-full max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="border border-[#2a2a2a] bg-[#0a0a0a]/60 backdrop-blur-md overflow-hidden rounded-xl"
            style={{
              minHeight: "600px",
              boxShadow:
                "0 0 60px rgba(0,0,0,0.5), inset 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a2a] bg-[#0a0a0a]/40">
              <div className="w-3 h-3 rounded-full bg-[#e85d04]/60" />
              <div className="w-3 h-3 rounded-full bg-[#666]/60" />
              <div className="w-3 h-3 rounded-full bg-[#333]/60" />
              <span className="ml-3 font-mono text-[10px] text-[#666] uppercase tracking-wider">
                AtlasFlux Demo
              </span>
            </div>
            <div className="p-1">
              <HeroAnimation />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: FEATURE NODES — Floating on helix */}
      <section className="relative h-screen overflow-hidden z-10 lg:pl-20">
        <div className="absolute inset-0">
          {features.map((f, i) => (
            <HelixNode
              key={i}
              num={f.num}
              title={f.title}
              desc={f.desc}
              delay={i}
              index={i}
              total={features.length}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-8 left-1/2 -translate-x-1/2"
        >
          <span className="font-mono text-[10px] text-[#666] uppercase tracking-[0.3em]">
            Core Capabilities
          </span>
        </motion.div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="relative h-screen flex items-center justify-center z-10 lg:pl-20 overflow-hidden">
        <MagneticCTA mousePos={mousePos} />
      </section>
    </div>
  );
}
