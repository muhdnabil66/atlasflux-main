"use client";
import { useState, useEffect } from "react";

export default function RotatingText() {
  const phrases = [
    "Grok 4.20 • GPT‑5.4 • Vision & PDF",
    "30+ AI Models, One Super‑App",
    "Image Gen • DeepSearch • 30 Daily Credits",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % phrases.length),
      6000,
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="rotating-text-wrapper">
      {phrases.map((phrase, i) => (
        <span
          key={i}
          className={`rotating-phrase ${i === index ? "active" : ""}`}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
}
