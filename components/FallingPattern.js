"use client";
import { useEffect, useRef } from "react";

export function FallingPattern({
  color = "rgba(232, 93, 4, 0.08)",
  backgroundColor = "#0c0c0c",
  className,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const PARTICLE_COUNT = 25; // Fewer, more intentional

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Start scattered
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 2 + 0.5; // Varied sizes
        this.speed = Math.random() * 0.3 + 0.1; // Slow, deliberate
        this.opacity = Math.random() * 0.5 + 0.1;
        this.drift = (Math.random() - 0.5) * 0.2; // Slight horizontal drift
      }

      update() {
        this.y += this.speed;
        this.x += this.drift;

        if (this.y > canvas.height + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = color.replace("0.08", this.opacity.toFixed(2));
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [color]);

  return (
    <div className={`fixed inset-0 -z-50 ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor }}
      />
    </div>
  );
}
