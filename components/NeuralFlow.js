// components/NeuralFlow.js
"use client";
import { useEffect, useRef, useCallback } from "react";

/* ── Utility ── */
const rand = (min, max) => Math.random() * (max - min) + min;

/* ── Struktur Nod ── */
const NODES = [
  // Lapisan input (kiri)
  { id: 0, x: 0.08, y: 0.2, radius: 5, pulseRadius: 14 },
  { id: 1, x: 0.08, y: 0.5, radius: 5, pulseRadius: 14 },
  { id: 2, x: 0.08, y: 0.8, radius: 5, pulseRadius: 14 },
  // Lapisan tersembunyi 1 (tengah-kiri)
  { id: 3, x: 0.3, y: 0.25, radius: 5, pulseRadius: 14 },
  { id: 4, x: 0.3, y: 0.5, radius: 5, pulseRadius: 14 },
  { id: 5, x: 0.3, y: 0.75, radius: 5, pulseRadius: 14 },
  // Lapisan tersembunyi 2 (tengah-kanan)
  { id: 6, x: 0.55, y: 0.3, radius: 5, pulseRadius: 14 },
  { id: 7, x: 0.55, y: 0.5, radius: 6, pulseRadius: 18 }, // nod tengah lebih besar
  { id: 8, x: 0.55, y: 0.7, radius: 5, pulseRadius: 14 },
  // Lapisan output (kanan)
  { id: 9, x: 0.8, y: 0.2, radius: 5, pulseRadius: 14 },
  { id: 10, x: 0.8, y: 0.5, radius: 5, pulseRadius: 14 },
  { id: 11, x: 0.8, y: 0.8, radius: 5, pulseRadius: 14 },
  // Nod tambahan untuk DeepSearch (atas)
  { id: 12, x: 0.42, y: 0.12, radius: 4, pulseRadius: 12 },
  { id: 13, x: 0.58, y: 0.12, radius: 4, pulseRadius: 12 },
];

/* ── Sambungan antara nod ── */
const EDGES = [
  // input -> hidden 1
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 4],
  [2, 5],
  // hidden 1 -> hidden 2
  [3, 6],
  [3, 7],
  [3, 8],
  [4, 6],
  [4, 7],
  [4, 8],
  [5, 6],
  [5, 7],
  [5, 8],
  // hidden 2 -> output
  [6, 9],
  [6, 10],
  [6, 11],
  [7, 9],
  [7, 10],
  [7, 11],
  [8, 9],
  [8, 10],
  [8, 11],
  // sambungan ke nod DeepSearch
  [0, 12],
  [2, 12],
  [12, 13],
  [13, 9],
  [13, 11],
];

/* ── Partikel bergerak (isyarat) ── */
class Signal {
  constructor(edge, speed) {
    this.edge = edge; // indeks edge dalam EDGES
    this.progress = Math.random(); // 0 -> 1 sepanjang garis
    this.speed = speed || rand(0.002, 0.006);
    this.size = rand(2.5, 4.5);
    this.opacity = rand(0.7, 1);
  }
  update() {
    this.progress += this.speed;
    if (this.progress > 1) {
      this.progress = 0;
      this.speed = rand(0.002, 0.006);
    }
  }
}

/* ── Komponen Utama ── */
export default function NeuralFlow() {
  const canvasRef = useRef(null);
  const signalsRef = useRef([]);
  const frameRef = useRef(null);
  const pulseMap = useRef(new Map()); // nodId -> kekuatan denyut (0–1)

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Lukis sambungan (garis latar)
    EDGES.forEach(([from, to]) => {
      const a = NODES[from];
      const b = NODES[to];
      const x1 = a.x * w;
      const y1 = a.y * h;
      const x2 = b.x * w;
      const y2 = b.y * h;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // 2. Kemas kini denyutan nod (pereputan)
    pulseMap.current.forEach((val, key) => {
      const newVal = val * 0.96;
      if (newVal < 0.01) pulseMap.current.delete(key);
      else pulseMap.current.set(key, newVal);
    });

    // 3. Kemas kini & lukis isyarat
    signalsRef.current.forEach((sig) => {
      sig.update();
      const [from, to] = EDGES[sig.edge];
      const a = NODES[from];
      const b = NODES[to];
      const x = (a.x + (b.x - a.x) * sig.progress) * w;
      const y = (a.y + (b.y - a.y) * sig.progress) * h;

      // Denyut nod ketibaan
      if (sig.progress > 0.98) {
        const prev = pulseMap.current.get(to) || 0;
        pulseMap.current.set(to, Math.min(prev + 0.5, 1));
      }

      // Lingkaran bercahaya (dot)
      ctx.beginPath();
      ctx.arc(x, y, sig.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(167, 139, 250, ${sig.opacity})`; // ungu lembut
      ctx.shadowColor = "#a78bfa";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Anak panah kecil (arah aliran)
      const angle = Math.atan2((b.y - a.y) * h, (b.x - a.x) * w);
      const arrowLen = 5;
      const ax = x + Math.cos(angle) * sig.size;
      const ay = y + Math.sin(angle) * sig.size;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(
        ax - arrowLen * Math.cos(angle - 1.2),
        ay - arrowLen * Math.sin(angle - 1.2),
      );
      ctx.lineTo(
        ax - arrowLen * Math.cos(angle + 1.2),
        ay - arrowLen * Math.sin(angle + 1.2),
      );
      ctx.closePath();
      ctx.fillStyle = `rgba(167, 139, 250, ${sig.opacity * 0.8})`;
      ctx.fill();
    });

    // 4. Lukis nod (dengan denyutan)
    NODES.forEach((node) => {
      const cx = node.x * w;
      const cy = node.y * h;
      const pulse = pulseMap.current.get(node.id) || 0;

      // Denyutan luar
      if (pulse > 0.01) {
        ctx.beginPath();
        ctx.arc(cx, cy, node.pulseRadius * (1 + pulse * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.15 * pulse})`;
        ctx.fill();
      }

      // Nod teras
      ctx.beginPath();
      ctx.arc(cx, cy, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#9333ea";
      ctx.fill();
      ctx.strokeStyle = "rgba(167, 139, 250, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    frameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Inisialisasi isyarat
    const signalCount = EDGES.length * 2;
    signalsRef.current = Array.from(
      { length: signalCount },
      () => new Signal(Math.floor(rand(0, EDGES.length)), rand(0.002, 0.008)),
    );

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [draw]);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#050508]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Label kecil */}
      <div className="absolute bottom-6 left-6 text-[10px] text-white/15 font-mono tracking-wider">
        NEURAL ENGINE ACTIVE
      </div>
      <div className="absolute top-6 right-6 text-[10px] text-white/15 font-mono tracking-wider">
        ATLASFLUX AI
      </div>
    </div>
  );
}
