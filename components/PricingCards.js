"use client";

import { motion } from "framer-motion";

export default function PricingCards() {
  const plans = [
    {
      name: "Starter",
      price: "RM5.99",
      credits: "200 credits",
      desc: "Perfect for occasional use.",
      features: ["Instant delivery", "No expiration", "Use for chat & images"],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      name: "Professional",
      price: "RM10.99",
      credits: "500 credits",
      desc: "Best value for regular creators.",
      features: ["500 credits", "~166 chat messages", "~33 HD images"],
      gradient: "from-violet-500 to-purple-600",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "RM39.99",
      credits: "2000 credits",
      desc: "Maximum value for power users.",
      features: [
        "2000 credits",
        "Best price per credit",
        "All features included",
      ],
      gradient: "from-amber-500 to-orange-600",
      popular: false,
    },
    {
      name: "Image Bundle",
      price: "RM49.99",
      credits: "100 image generations",
      desc: "Dedicated image credits – no regular credits used.",
      features: ["100 image gens", "Any quality mode", "Never expires"],
      gradient: "from-emerald-500 to-teal-600",
      popular: false,
    },
  ];

  return (
    <div className="pricing-grid">
      {plans.map((plan, idx) => (
        <motion.div
          key={plan.name}
          className={`pricing-card ${plan.popular ? "popular" : ""}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
        >
          {plan.popular && <div className="popular-badge">🔥 Most Popular</div>}
          <div
            className="pricing-icon"
            style={{
              background: `linear-gradient(135deg, ${plan.gradient.split(" ")[1]}, ${plan.gradient.split(" ")[3]})`,
            }}
          >
            <i
              className={
                plan.name === "Starter"
                  ? "fas fa-bolt"
                  : plan.name === "Professional"
                    ? "fas fa-star"
                    : plan.name === "Ultimate"
                      ? "fas fa-gem"
                      : "fas fa-image"
              }
            ></i>
          </div>
          <h3>{plan.name}</h3>
          <div className="pricing-amount">{plan.price}</div>
          <div className="pricing-credits">{plan.credits}</div>
          <p className="pricing-desc">{plan.desc}</p>
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
          >
            Buy Now →
          </a>
        </motion.div>
      ))}
    </div>
  );
}
