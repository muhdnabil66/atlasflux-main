"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { id: "chat", label: "neural_chat", icon: "◈" },
  { id: "image", label: "synth_image", icon: "◉" },
  { id: "video", label: "flux_video", icon: "◆" },
];

const DEMO_DATA = {
  chat: {
    prompt: "Generate a CRISPR sequence for enhanced protein folding",
    response: [
      ">> Initializing AtlasFlux neural engine...",
      ">> Loading bio-informatics module v4.2",
      ">> Sequence analysis: 2,847 base pairs detected",
      ">> Optimizing codon usage for E. coli expression",
      "",
      "RESULT:",
      "ATG-GCC-CTG-AAA-GTT-CGA-TAC-CTG-AGC",
      "GTT-AAA-CCG-TAT-GGC-ATC-CTG-AAC-TGG",
      ">> Confidence: 94.7%",
      ">> Folding stability: HIGH",
      ">> Expression yield: ~340mg/L",
      "",
      "[SAVED to /lab/sequences/crispr_001.dna]",
    ],
  },
  image: {
    prompt: "Synthesize microscopic view of synthetic mitochondria",
    response: [
      ">> AtlasFlux Imagen 4 Pro initialized",
      ">> Loading electron microscopy dataset...",
      ">> Resolution: 4096x4096 (16K native)",
      ">> Render mode: Cryo-EM simulation",
      "",
      "LAYER 001: Membrane structure ████████░░ 80%",
      "LAYER 002: Cristae formation  ██████░░░░ 60%",
      "LAYER 003: ATP synthase array   █████████░ 90%",
      "LAYER 004: DNA nucleoids        ███████░░░ 70%",
      "",
      ">> Post-processing: Chromatic aberration",
      ">> Color profile: Fluorescent stain (MitoTracker)",
      "",
      "[OUTPUT: /lab/images/synth_mito_001.png]",
    ],
  },
  video: {
    prompt: "Simulate protein folding dynamics over 8 seconds",
    response: [
      ">> Seedance 1 Pro | Biophysics mode",
      ">> Frame buffer: 1920x1080 @ 60fps",
      ">> Simulation: Molecular dynamics (OpenMM)",
      "",
      "FRAME 001/480: Unfolded state (U)",
      "FRAME 120/480: Transition state (TS) ◄ critical",
      "FRAME 240/480: Molten globule (MG)",
      "FRAME 360/480: Native fold (N) ◄ stable",
      "FRAME 480/480: Equilibrium reached",
      "",
      ">> RMSD: 0.34Å (excellent)",
      ">> Energy landscape: 3 local minima",
      "",
      "[OUTPUT: /lab/videos/folding_dynamics_001.mp4]",
    ],
  },
};

// DNA color tokens
const C = {
  bg: "#0a0a0a",
  bgPanel: "#111111",
  border: "#2a2a2a",
  text: "#e8e4dc",
  textDim: "#6b6560",
  textMuted: "#3a3a3a",
  accent: "#E85D04", // Orange primary
  accentDim: "rgba(232, 93, 4, 0.15)",
  accentGlow: "rgba(232, 93, 4, 0.4)",
  secondary: "#00F5D4", // Teal secondary
  secondaryDim: "rgba(0, 245, 212, 0.1)",
  error: "#ff3333",
};

// Glitch text component
function GlitchText({ text, active }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iterations) return text[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (iterations >= text.length) {
        clearInterval(interval);
      }
      iterations += 1 / 2; // Slow decode
    }, 30);
    return () => clearInterval(interval);
  }, [text, active]);

  return <span>{display}</span>;
}

// Scanline overlay
function Scanlines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-20"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
        backgroundSize: "100% 4px",
      }}
    />
  );
}

// DNA helix decoration
function DNAHelix({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const strands = 2;
      const points = 20;

      for (let s = 0; s < strands; s++) {
        for (let i = 0; i < points; i++) {
          const y = (i / points) * h;
          const phase = frame * 0.02 + i * 0.3 + s * Math.PI;
          const x = w / 2 + Math.sin(phase) * (w * 0.35);
          const size = 2 + Math.sin(phase) * 1.5;

          ctx.beginPath();
          ctx.arc(x, y, Math.abs(size), 0, Math.PI * 2);
          ctx.fillStyle = s === 0 ? C.accent : C.secondary;
          ctx.globalAlpha = 0.3 + Math.sin(phase) * 0.2;
          ctx.fill();
        }
      }

      // Connecting bars
      for (let i = 0; i < points; i++) {
        const y = (i / points) * h;
        const phase1 = frame * 0.02 + i * 0.3;
        const phase2 = frame * 0.02 + i * 0.3 + Math.PI;
        const x1 = w / 2 + Math.sin(phase1) * (w * 0.35);
        const x2 = w / 2 + Math.sin(phase2) * (w * 0.35);

        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(232, 93, 4, ${0.1 + Math.sin(frame * 0.05) * 0.05})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      width={80}
      height={300}
      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40"
    />
  );
}

// Typing hook with irregular speed
function useTypewriter(lines, speed = 25, onComplete) {
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayed([]);
    setCurrentLine(0);
    setCurrentChar(0);
    setIsDone(false);
  }, [lines]);

  useEffect(() => {
    if (isDone || currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar >= line.length) {
      // Line done, move to next
      const timeout = setTimeout(
        () => {
          setDisplayed((prev) => [...prev, line]);
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        },
        80 + Math.random() * 120,
      ); // Irregular pause
      return () => clearTimeout(timeout);
    }

    // Type next char with irregular speed
    const delay = speed + (Math.random() - 0.5) * speed * 1.5;
    const timeout = setTimeout(
      () => {
        setCurrentChar((prev) => prev + 1);
      },
      Math.max(5, delay),
    );

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar, lines, speed, isDone]);

  useEffect(() => {
    if (currentLine >= lines.length && !isDone) {
      setIsDone(true);
      onComplete?.();
    }
  }, [currentLine, lines.length, isDone, onComplete]);

  const currentDisplay = lines[currentLine]?.slice(0, currentChar) || "";
  return [...displayed, currentDisplay];
}

export default function HeroAnimation() {
  const [activeTab, setActiveTab] = useState("chat");
  const [phase, setPhase] = useState("idle"); // idle | typing | processing | output
  const [outputLines, setOutputLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const terminalRef = useRef(null);

  const demo = DEMO_DATA[activeTab];

  // Blink cursor with irregular timing
  useEffect(() => {
    const blink = () => {
      setShowCursor((p) => !p);
      setTimeout(blink, 400 + Math.random() * 800);
    };
    const id = setTimeout(blink, 500);
    return () => clearTimeout(id);
  }, [activeTab]);

  // Auto-cycle tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("idle");
      setOutputLines([]);
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
      const idx = TABS.findIndex((t) => t.id === activeTab);
      setActiveTab(TABS[(idx + 1) % TABS.length].id);
    }, 18000);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Run demo sequence
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setPhase("idle");
      setOutputLines([]);
      await new Promise((r) => setTimeout(r, 600));

      setPhase("typing");
      await new Promise((r) => setTimeout(r, 2500));

      setPhase("processing");
      await new Promise((r) => setTimeout(r, 2000));

      setPhase("output");
      if (!cancelled) {
        // Build output progressively
        for (let i = 0; i < demo.response.length; i++) {
          setOutputLines((prev) => [...prev, demo.response[i]]);
          await new Promise((r) => setTimeout(r, 60 + Math.random() * 100));
        }
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [activeTab, demo.response]);

  // Scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputLines, phase]);

  const getStatusColor = () => {
    switch (phase) {
      case "idle":
        return C.textMuted;
      case "typing":
        return C.accent;
      case "processing":
        return C.secondary;
      case "output":
        return "#00ff00";
      default:
        return C.textDim;
    }
  };

  const getStatusText = () => {
    switch (phase) {
      case "idle":
        return "STANDBY";
      case "typing":
        return "INPUT_ACTIVE";
      case "processing":
        return "COMPUTE_DNA::RUNNING";
      case "output":
        return "SEQUENCE_COMPLETE";
      default:
        return "UNKNOWN";
    }
  };

  return (
    <div className="relative h-full flex flex-col bg-[#0a0a0a] font-mono text-sm overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${C.accentDim} 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${C.secondaryDim} 0%, transparent 50%)`,
        }}
      />
      <Scanlines />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a] bg-[#111]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#6b6560]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00F5D4]" />
          </div>
          <span className="text-[10px] text-[#3a3a3a] uppercase tracking-widest">
            atlasflux_lab // v3.1.0
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: getStatusColor() }}
          />
          <span
            className="text-[10px] uppercase tracking-widest"
            style={{ color: getStatusColor() }}
          >
            {getStatusText()}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative z-10 flex border-b border-[#2a2a2a]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setPhase("idle");
              setOutputLines([]);
              setActiveTab(tab.id);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-widest border-r border-[#2a2a2a] transition-all ${
              activeTab === tab.id
                ? "bg-[#1a1a1a] text-[#E85D04] border-b-2 border-b-[#E85D04]"
                : "text-[#6b6560] hover:text-[#e8e4dc] hover:bg-[#111]"
            }`}
          >
            <span className="text-xs">{tab.icon}</span>
            <GlitchText
              text={tab.label}
              active={glitchActive && activeTab === tab.id}
            />
          </button>
        ))}
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="relative z-10 flex-1 p-4 overflow-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#2a2a2a #0a0a0a",
        }}
      >
        {/* DNA Helix decoration */}
        <DNAHelix active={phase === "processing"} />

        {/* Prompt */}
        <AnimatePresence mode="wait">
          {(phase === "typing" ||
            phase === "processing" ||
            phase === "output") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4"
            >
              <div className="flex items-center gap-2 text-[#6b6560] text-[10px] uppercase tracking-widest mb-2">
                <span>{"//"}</span>
                <span>User Query</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E85D04] mt-0.5">{">"}</span>
                <span className="text-[#e8e4dc]">
                  {phase === "typing" ? (
                    <TypewriterText text={demo.prompt} speed={30} />
                  ) : (
                    demo.prompt
                  )}
                  {phase === "typing" && (
                    <span
                      className={`inline-block w-2 h-4 bg-[#E85D04] ml-1 align-middle ${
                        showCursor ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Processing indicator */}
        <AnimatePresence>
          {phase === "processing" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 overflow-hidden"
            >
              <div className="flex items-center gap-3 py-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scaleY: [0.3, 1, 0.3],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="w-1 h-4 bg-[#00F5D4]"
                    />
                  ))}
                </div>
                <span className="text-[10px] text-[#00F5D4] uppercase tracking-widest animate-pulse">
                  Computing DNA sequence...
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1 bg-[#1a1a1a] overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full"
                  style={{
                    background: `linear-gradient(90deg, ${C.accent}, ${C.secondary})`,
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Output */}
        <div className="space-y-0.5">
          {outputLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className="text-[13px] leading-relaxed"
              style={{
                color: line.startsWith(">>")
                  ? C.textDim
                  : line.startsWith("RESULT:") || line.startsWith("FRAME")
                    ? C.accent
                    : line.startsWith("[")
                      ? C.secondary
                      : line.includes("░") || line.includes("█")
                        ? C.accent
                        : C.text,
                fontWeight:
                  line.startsWith("RESULT:") || line.startsWith("ATG")
                    ? "bold"
                    : "normal",
              }}
            >
              {line.includes("░") || line.includes("█") ? (
                <span className="font-mono tracking-tight">{line}</span>
              ) : (
                line
              )}
            </motion.div>
          ))}
          {phase === "output" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="mt-2"
            >
              <span className="text-[#E85D04]">{">"}</span>
              <span
                className={`inline-block w-2 h-4 bg-[#E85D04] ml-1 align-middle ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer status */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2 border-t border-[#2a2a2a] bg-[#111] text-[10px]">
        <div className="flex items-center gap-4 text-[#3a3a3a]">
          <span>UTF-8</span>
          <span>DNA-SEQ</span>
          <span>v3.1.0-stable</span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: getStatusColor() }}>●</span>
          <span
            className="uppercase tracking-widest"
            style={{ color: getStatusColor() }}
          >
            {getStatusText()}
          </span>
        </div>
      </div>
    </div>
  );
}

// Helper: Typewriter with irregular speed
function TypewriterText({ text, speed = 25 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        const delay = speed + (Math.random() - 0.5) * speed * 1.2;
        setTimeout(type, Math.max(8, delay));
      }
    };
    type();
  }, [text, speed]);

  return <span>{displayed}</span>;
}
