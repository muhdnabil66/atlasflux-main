"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Image as ImageIcon,
  Film,
  Sparkles,
  FileText,
  Zap,
  Globe,
  Brain,
  Plus,
  Settings2,
  Info,
  Play,
  Wand2,
  X,
} from "lucide-react";

// ── Teks demo ──
const CHAT_PROMPT = "Explain quantum computing in simple terms with examples";

// Reasoning text DIPANJANGKAN
const CHAT_REASONING =
  "To explain quantum computing simply, I'll break it down into key concepts: 1) Qubits vs classical bits – classical bits are 0 or 1, but qubits can be both at the same time through superposition. 2) Superposition allows a qubit to exist in multiple states until measured, giving quantum computers exponential parallelism. 3) Entanglement links qubits so the state of one instantly influences another, even across large distances. 4) Quantum gates manipulate qubits through interference, amplifying correct answers and cancelling wrong ones. 5) Real-world examples: Google's Sycamore achieved quantum supremacy in 2019; drug discovery simulations; breaking certain encryption schemes with Shor's algorithm. In simple terms, imagine a classical computer searching a dark room with a flashlight one spot at a time, while a quantum computer turns on all lights simultaneously.";

const CHAT_RESPONSE =
  "Quantum computing harnesses qubits that can exist in superposition (0 and 1 simultaneously) and entanglement. For example, while a classical computer checks a maze path by path, a quantum computer explores all paths at once. This makes it revolutionary for cryptography, drug discovery, and optimization problems.";

const IMAGE_PROMPT =
  "A highly detailed, photorealistic portrait of a beautiful young woman...";
const VIDEO_PROMPT = "group of mafia walking rainy day";

// ── Design tokens ──
const T = {
  bg: "#0a0a0a",
  bgInput: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.07)",
  text: "#f1f5f9",
  textDim: "rgba(255,255,255,0.5)",
  textMuted: "rgba(255,255,255,0.3)",
  purple: "#7c3aed",
  purpleLight: "#a78bfa",
  pink: "#ec4899",
  yellow: "#fbbf24",
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* ── Chat Demo ── */
function ChatDemo() {
  const [step, setStep] = useState("idle");
  const [typedPrompt, setTypedPrompt] = useState("");
  const [reasoningText, setReasoningText] = useState("");
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    let active = true;
    const run = async () => {
      // Reset
      setStep("idle");
      setTypedPrompt("");
      setReasoningText("");
      setResponseText("");
      await delay(600);

      // Taip prompt
      setStep("typing");
      for (let i = 0; i <= CHAT_PROMPT.length; i++) {
        if (!active) return;
        setTypedPrompt(CHAT_PROMPT.slice(0, i));
        await delay(35);
      }
      await delay(600);

      // Lampirkan fail
      setStep("attached");
      await delay(1000);

      // Thinking + globe
      setStep("thinking");
      await delay(2500);

      // Reasoning (lebih panjang – teks lebih banyak & sedikit perlahan)
      setStep("reasoning");
      for (let i = 0; i <= CHAT_REASONING.length; i++) {
        if (!active) return;
        setReasoningText(CHAT_REASONING.slice(0, i));
        await delay(35); // sedikit perlahan untuk efek lebih jelas
      }
      await delay(800);

      // Jawapan (DILAJUKAN)
      setStep("answering");
      for (let i = 0; i <= CHAT_RESPONSE.length; i++) {
        if (!active) return;
        setResponseText(CHAT_RESPONSE.slice(0, i));
        await delay(10); // lebih laju (10ms)
      }

      setStep("done");
      await delay(5000);
    };
    run();
    const interval = setInterval(run, 26000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-full p-3">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{
              background: T.bgInput,
              border: `1px solid ${T.border}`,
              color: T.textDim,
            }}
          >
            <Zap size={12} style={{ color: T.yellow }} /> 30
          </div>
          <div
            className="flex items-center p-0.5 rounded-lg"
            style={{ background: T.bgInput, border: `1px solid ${T.border}` }}
          >
            <span
              className="px-2 py-0.5 rounded-md text-[10px] font-medium"
              style={{ background: "rgba(255,255,255,0.08)", color: T.text }}
            >
              Auto
            </span>
            <span
              className="px-2 py-0.5 rounded-md text-[10px]"
              style={{ color: T.textMuted }}
            >
              Manual
            </span>
          </div>
        </div>
        {(step === "thinking" ||
          step === "reasoning" ||
          step === "answering") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px]"
            style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.2)",
              color: T.purpleLight,
            }}
          >
            <Globe size={11} /> DeepSearch
          </motion.div>
        )}
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col gap-3 overflow-hidden mb-3">
        {step !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-end max-w-[85%]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "16px 16px 4px 16px",
              padding: "10px 14px",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: T.text }}>
              {typedPrompt || " "}
              {step === "typing" && (
                <span
                  className="inline-block w-1.5 h-4 ml-0.5 align-middle animate-pulse"
                  style={{ background: T.purpleLight }}
                />
              )}
            </p>
            {step !== "typing" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-2 flex items-center gap-2 px-2.5 py-1.5 rounded-lg"
                style={{
                  background: T.bgInput,
                  border: `1px solid ${T.border}`,
                }}
              >
                <FileText size={14} style={{ color: T.pink }} />
                <span className="text-xs" style={{ color: T.textDim }}>
                  research.pdf
                </span>
                <X size={12} style={{ color: T.textMuted }} />
              </motion.div>
            )}
          </motion.div>
        )}

        {(step === "thinking" ||
          step === "reasoning" ||
          step === "answering" ||
          step === "done") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-start max-w-[90%]"
          >
            {step === "thinking" && (
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
                </div>
                <span className="text-xs" style={{ color: T.textMuted }}>
                  Searching the web…
                </span>
              </div>
            )}

            {(step === "reasoning" ||
              step === "answering" ||
              step === "done") &&
              reasoningText && (
                <div
                  className="mb-3 p-3 rounded-lg border"
                  style={{
                    background: "rgba(234,179,8,0.05)",
                    borderColor: "rgba(234,179,8,0.2)",
                    color: "#fbbf24",
                  }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    <Brain size={12} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-yellow-500/80">
                      Reasoning
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-80">
                    {reasoningText}
                    {step === "reasoning" && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 align-middle bg-yellow-400 animate-pulse" />
                    )}
                  </p>
                </div>
              )}

            {(step === "answering" || step === "done") && (
              <div className="px-4 py-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: T.text }}
                >
                  {responseText}
                  {step === "answering" && (
                    <span className="inline-block w-1.5 h-4 ml-0.5 align-middle bg-purple-400 animate-pulse" />
                  )}
                </p>
                {step === "done" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[10px] italic mt-2"
                    style={{ color: T.textMuted }}
                  >
                    Powered by AtlasFlux AI
                  </motion.p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 mt-auto">
        <button
          className="p-2 rounded-full"
          style={{
            background: T.bgInput,
            border: `1px solid ${T.border}`,
            color: T.textMuted,
          }}
        >
          <Plus size={16} />
        </button>
        <div
          className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
          style={{ background: T.bgInput, border: `1px solid ${T.border}` }}
        >
          <span className="text-sm flex-1" style={{ color: T.textMuted }}>
            {step === "idle" ? "Ask anything..." : CHAT_PROMPT}
          </span>
          <button
            className="p-1.5 rounded-lg"
            style={{
              background: "rgba(124,58,237,0.15)",
              color: T.purpleLight,
            }}
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Image Demo ── */
function ImageDemo() {
  const [step, setStep] = useState("idle");
  const [typedPrompt, setTypedPrompt] = useState("");

  useEffect(() => {
    let active = true;
    const run = async () => {
      setStep("idle");
      setTypedPrompt("");
      await delay(500);

      setStep("prompt");
      for (let i = 0; i <= IMAGE_PROMPT.length; i++) {
        if (!active) return;
        setTypedPrompt(IMAGE_PROMPT.slice(0, i));
        await delay(30);
      }
      await delay(800);

      setStep("generating");
      await delay(4000);

      setStep("result");
      await delay(7000);
    };
    run();
    const interval = setInterval(run, 22000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-full p-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{
              background: T.bgInput,
              border: `1px solid ${T.border}`,
              color: T.textDim,
            }}
          >
            <ImageIcon size={12} style={{ color: T.purpleLight }} /> Imagen 4
          </div>
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{
              background: T.bgInput,
              border: `1px solid ${T.border}`,
              color: T.yellow,
            }}
          >
            <Zap size={12} /> 50
          </div>
        </div>
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px]"
          style={{
            background: T.bgInput,
            border: `1px solid ${T.border}`,
            color: T.textDim,
          }}
        >
          <Settings2 size={11} /> Ultra Quality
        </div>
      </div>

      <div
        className="rounded-xl p-3 mb-3"
        style={{ background: T.bgInput, border: `1px solid ${T.border}` }}
      >
        <textarea
          readOnly
          value={typedPrompt}
          rows={3}
          className="w-full bg-transparent text-sm leading-relaxed resize-none outline-none"
          style={{ color: T.text, fontFamily: "'DM Sans',sans-serif" }}
          placeholder="Describe the image…"
        />
        <div className="flex items-center gap-2 mt-2">
          <span
            className="text-[10px] px-2 py-0.5 rounded-full"
            style={{
              background: T.bgInput,
              border: `1px solid ${T.border}`,
              color: T.textDim,
            }}
          >
            Aspect: 3:4
          </span>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full"
            style={{
              background: T.bgInput,
              border: `1px solid ${T.border}`,
              color: T.textDim,
            }}
          >
            Res: 2K
          </span>
          <Info size={11} style={{ color: T.textMuted }} />
        </div>
      </div>

      {/* Reference image slots DIKELUARKAN untuk beri lebih ruang kepada output */}

      <div className="flex-1 flex items-center justify-center mb-3 min-h-[250px]">
        {step === "generating" ? (
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl border flex items-center justify-center"
              style={{
                background: "rgba(124,58,237,0.08)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              >
                <Sparkles size={22} style={{ color: T.purpleLight }} />
              </motion.div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm" style={{ color: T.textDim }}>
                Generating your image…
              </span>
              <div
                className="w-40 h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg,${T.purple},${T.pink})`,
                  }}
                />
              </div>
            </div>
          </div>
        ) : step === "result" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full h-full rounded-xl overflow-hidden relative border border-white/10"
          >
            <img
              src="/display4.png"
              alt="Generated portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                <span className="text-[10px] text-white/50">2K · PNG</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400">
                ✓ Generated
              </span>
            </div>
          </motion.div>
        ) : (
          <div className="text-center text-white/30">
            <ImageIcon size={48} className="mx-auto mb-2 opacity-20" />
            <p className="text-xs">Your image will appear here</p>
          </div>
        )}
      </div>

      <button
        className="w-full py-2.5 rounded-xl text-sm font-semibold text-white mt-auto"
        style={{ background: `linear-gradient(135deg,${T.purple},#4f46e5)` }}
      >
        <Wand2 size={14} className="inline mr-2" /> Generate Image · 50 credits
      </button>
    </div>
  );
}

/* ── Video Demo ── */
function VideoDemo() {
  const [step, setStep] = useState("idle");
  const [typedPrompt, setTypedPrompt] = useState("");

  useEffect(() => {
    let active = true;
    const run = async () => {
      setStep("idle");
      setTypedPrompt("");
      await delay(500);

      setStep("prompt");
      for (let i = 0; i <= VIDEO_PROMPT.length; i++) {
        if (!active) return;
        setTypedPrompt(VIDEO_PROMPT.slice(0, i));
        await delay(35);
      }
      await delay(700);

      setStep("generating");
      await delay(4500);

      setStep("result");
      await delay(8000);
    };
    run();
    const interval = setInterval(run, 25000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-full p-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{
              background: T.bgInput,
              border: `1px solid ${T.border}`,
              color: T.textDim,
            }}
          >
            <Film size={12} style={{ color: T.purpleLight }} /> Seedance 1 Pro
          </div>
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{
              background: T.bgInput,
              border: `1px solid ${T.border}`,
              color: T.yellow,
            }}
          >
            <Zap size={12} /> 180
          </div>
        </div>
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px]"
          style={{
            background: T.bgInput,
            border: `1px solid ${T.border}`,
            color: T.textDim,
          }}
        >
          <span>1080p · 8s</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          ["Resolution", "1080p"],
          ["Duration", "8s"],
          ["Aspect Ratio", "16:9"],
          ["Audio", "Yes"],
        ].map(([l, v]) => (
          <div
            key={l}
            className="flex items-center justify-between px-3 py-2 rounded-lg"
            style={{ background: T.bgInput, border: `1px solid ${T.border}` }}
          >
            <span className="text-[10px]" style={{ color: T.textMuted }}>
              {l}
            </span>
            <span
              className="text-[10px] font-medium"
              style={{ color: T.textDim }}
            >
              {v}
            </span>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-3 mb-3"
        style={{ background: T.bgInput, border: `1px solid ${T.border}` }}
      >
        <textarea
          readOnly
          value={typedPrompt}
          rows={2}
          className="w-full bg-transparent text-sm leading-relaxed resize-none outline-none"
          style={{ color: T.text, fontFamily: "'DM Sans',sans-serif" }}
          placeholder="Describe the video…"
        />
      </div>

      <div className="flex-1 flex items-center justify-center mb-3 min-h-[200px]">
        {step === "generating" ? (
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl border flex items-center justify-center"
              style={{
                background: "rgba(124,58,237,0.08)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              >
                <Film size={22} style={{ color: T.purpleLight }} />
              </motion.div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm" style={{ color: T.textDim }}>
                Generating your video…
              </span>
              <span className="text-[10px]" style={{ color: T.textMuted }}>
                2-5 minutes remaining
              </span>
              <div
                className="w-40 h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 4.5, ease: "easeInOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg,${T.purple},${T.pink})`,
                  }}
                />
              </div>
            </div>
          </div>
        ) : step === "result" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full h-full rounded-xl overflow-hidden relative bg-black border border-white/10"
          >
            <video
              src="/videos/seedance-1-pro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-16 h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div className="w-1/2 h-full rounded-full bg-purple-500" />
                </div>
                <span className="text-[10px] text-white/50">0:04 / 0:08</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400">
                ✓ Generated
              </span>
            </div>
          </motion.div>
        ) : (
          <div className="text-center text-white/30">
            <Film size={40} className="mx-auto mb-2 opacity-20" />
            <p className="text-xs">Your video will appear here</p>
          </div>
        )}
      </div>

      <button
        className="w-full py-2.5 rounded-xl text-sm font-semibold text-white mt-auto"
        style={{ background: `linear-gradient(135deg,${T.purple},#4f46e5)` }}
      >
        <Wand2 size={14} className="inline mr-2" /> Generate Video · 180 credits
      </button>
    </div>
  );
}

/* ── Tab navigation ── */
const TABS = [
  { id: "chat", label: "Chat", icon: Sparkles },
  { id: "image", label: "Image", icon: ImageIcon },
  { id: "video", label: "Video", icon: Film },
];

export default function HeroAnimation() {
  const [activeTab, setActiveTab] = useState("chat");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const idx = TABS.findIndex((t) => t.id === prev);
        return TABS[(idx + 1) % TABS.length].id;
      });
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col rounded-2xl overflow-hidden select-none"
      style={{ background: T.bg, border: `1px solid ${T.border}` }}
    >
      <div
        className="flex items-center justify-center gap-1 p-2"
        style={{ background: "#060606", borderBottom: `1px solid ${T.border}` }}
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                color: isActive ? T.text : T.textMuted,
                border: isActive
                  ? `1px solid ${T.border}`
                  : "1px solid transparent",
              }}
            >
              <Icon size={13} />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            {activeTab === "chat" && <ChatDemo />}
            {activeTab === "image" && <ImageDemo />}
            {activeTab === "video" && <VideoDemo />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
