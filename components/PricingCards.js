"use client";
import { motion } from "framer-motion";

export default function PricingCards() {
  const plans = [
    {
      name: "Starter",
      price: "RM5.99",
      credits: "200 credits",
      features: ["Instant delivery", "No expiration", "Use for chat & images"],
    },
    {
      name: "Professional",
      price: "RM10.99",
      credits: "500 credits",
      features: ["500 credits", "~166 chat messages", "~33 HD images"],
      highlight: true,
    },
    {
      name: "Ultimate",
      price: "RM39.99",
      credits: "2000 credits",
      features: ["2000 credits", "Best price per credit", "All features"],
    },
    {
      name: "Image Bundle",
      price: "RM49.99",
      credits: "100 image gens",
      features: ["100 image generations", "Any quality mode", "Never expires"],
    },
  ];

  return (
    <div className="pricing-grid">
      {plans.map((plan, idx) => (
        <motion.div
          key={plan.name}
          className="pricing-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          style={
            plan.highlight
              ? {
                  borderColor: "var(--accent-gold)",
                  boxShadow: "var(--shadow-glow)",
                }
              : {}
          }
        >
          <h3 className="pricing-name">{plan.name}</h3>
          <div className="pricing-price">{plan.price}</div>
          <div className="pricing-credits">{plan.credits}</div>
          <ul className="pricing-features">
            {plan.features.map((f, i) => (
              <li key={i}>
                <i className="fas fa-check-circle"></i> {f}
              </li>
            ))}
          </ul>
          <a
            href="https://ai.atlasflux.my/purchase"
            className="pricing-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase
          </a>
        </motion.div>
      ))}
    </div>
  );
}
