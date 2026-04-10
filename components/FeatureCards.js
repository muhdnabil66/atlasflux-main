"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "fas fa-globe",
    title: "Proactive Web Research",
    description:
      "Get up‑to‑date answers with deep source analysis. The system reads top pages and provides citations.",
  },
  {
    icon: "fas fa-code",
    title: "Intelligent Coding",
    description:
      "Analyze, debug, and generate code with high efficiency. Optimized for programming tasks.",
  },
  {
    icon: "fas fa-file-alt",
    title: "File Analysis & Vision",
    description:
      "Upload images, PDFs, Word documents, and spreadsheets. Extract text and analyze visual content.",
  },
  {
    icon: "fas fa-sliders-h",
    title: "Message Actions",
    description:
      "Copy, delete, redo, like/dislike, read aloud, and view sources. Full control over your conversation.",
  },
  {
    icon: "fas fa-history",
    title: "Credit Logs",
    description:
      "Every transaction is recorded. View your usage, additions, and refunds anytime.",
  },
  {
    icon: "fas fa-gem",
    title: "Premium Experience",
    description:
      "Automatic model selection prioritizes free then low‑cost models. You always get the best value.",
  },
];

export default function FeatureCards() {
  return (
    <div className="features-grid">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          className="feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: idx * 0.05, duration: 0.5 }}
        >
          <div className="feature-icon">
            <i className={feature.icon}></i>
          </div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-desc">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
