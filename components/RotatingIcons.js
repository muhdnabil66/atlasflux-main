"use client";
import { useEffect, useState } from "react";

const icons = [
  { icon: "fas fa-robot", label: "AI" },
  { icon: "fas fa-file-alt", label: "Files" },
  { icon: "fas fa-image", label: "Images" },
  { icon: "fas fa-music", label: "Music" },
  { icon: "fas fa-search", label: "Search" },
  { icon: "fas fa-code", label: "Code" },
  { icon: "fas fa-shield-alt", label: "Security" },
  { icon: "fas fa-brain", label: "Intelligence" },
];

export default function RotatingIcons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rotating-icons-container">
      <div className="icon-circle">
        {icons.map((item, idx) => (
          <div
            key={idx}
            className={`icon-item ${idx === currentIndex ? "active" : ""}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: idx === currentIndex ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              textAlign: "center",
            }}
          >
            <i
              className={item.icon}
              style={{ fontSize: "4rem", color: "var(--accent-gold)" }}
            ></i>
            <p
              style={{
                marginTop: "0.5rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="rotating-ring"></div>
      <div className="rotating-ring-dashed"></div>
      <style jsx>{`
        .rotating-icons-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
        }
        .icon-circle {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rotating-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid var(--border-gold);
          border-radius: 50%;
          animation: spin 20s linear infinite;
        }
        .rotating-ring-dashed {
          position: absolute;
          top: -10px;
          left: -10px;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          border: 1px dashed var(--border-gold);
          border-radius: 50%;
          opacity: 0.4;
          animation: spin-reverse 15s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @media (max-width: 768px) {
          .rotating-icons-container {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}
