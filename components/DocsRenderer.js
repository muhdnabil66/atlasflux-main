// components/DocsRenderer.js
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryDisplayNames = {
  intro: "Introduction",
  gs: "Getting Started",
  chat: "AI Chat",
  modes: "Chat Modes",
  previews: "Code, File & Source Previews",
  image: "AI Image Generation",
  video: "Video Generation",
  tools: "All AI Tools",
  credit: "Credit System",
  myr: "MYR Wallet & Pay-As-You-Go",
  purchase: "Purchases & Credit Packs",
  referral: "Referral Program",
  account: "Account & Profile",
  preferences: "Preferences",
  security: "Security Settings",
  archived: "Archived Messages",
  afcode: "AF Code Library",
  comm: "Community Forum",
  models: "Model Catalog & Capabilities",
  pwa: "PWA Installation",
  support: "Support",
  legal: "Legal Policies",
  updates: "Updates & Changelog",
  faq: "Frequently Asked Questions",
  troubleshoot: "Troubleshooting",
  limitations: "Known Limitations",
};

const desiredOrder = [
  "intro",
  "gs",
  "chat",
  "modes",
  "previews",
  "image",
  "video",
  "tools",
  "credit",
  "myr",
  "purchase",
  "referral",
  "account",
  "preferences",
  "security",
  "archived",
  "afcode",
  "comm",
  "models",
  "pwa",
  "support",
  "legal",
  "updates",
  "faq",
  "troubleshoot",
  "limitations",
];

function renderContent(content) {
  if (typeof content === "string") {
    return (
      <p className="text-sm text-[#6b6560] leading-relaxed whitespace-pre-line">
        {content}
      </p>
    );
  }
  if (!Array.isArray(content) || content.length === 0) {
    return <p className="text-sm text-[#3a3a3a] italic">— Empty —</p>;
  }
  const firstItem = content[0];
  if (typeof firstItem !== "object" || firstItem === null) {
    return (
      <ul className="list-disc list-inside text-sm text-[#6b6560] space-y-2">
        {content.map((item, i) => (
          <li key={i}>{String(item)}</li>
        ))}
      </ul>
    );
  }
  // FAQ table
  if (firstItem.q !== undefined && firstItem.a !== undefined) {
    return (
      <div className="space-y-4">
        {content.map((item, i) => (
          <div key={i} className="border-l-2 border-[#2a2a2a] pl-4">
            <p className="text-sm font-bold text-[#e8e4dc] mb-1">{item.q}</p>
            <p className="text-sm text-[#6b6560]">{item.a}</p>
          </div>
        ))}
      </div>
    );
  }
  // Tools table
  if (firstItem.tool !== undefined) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-[#2a2a2a]">
              <th className="text-left py-2 pr-4 font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                Tool
              </th>
              <th className="text-left py-2 pr-4 font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                Cost
              </th>
              <th className="text-left py-2 font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => (
              <tr key={i} className="border-b border-[#1a1a1a]">
                <td className="py-3 pr-4 text-[#e8e4dc] font-medium">
                  {item.tool}
                </td>
                <td className="py-3 pr-4 text-[#e85d04] font-mono">
                  {item.cost}
                </td>
                <td className="py-3 text-[#6b6560]">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  // Model list
  if (firstItem.name !== undefined && firstItem.use !== undefined) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-[#2a2a2a]">
              <th className="text-left py-2 pr-4 font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                Model
              </th>
              <th className="text-left py-2 font-mono text-xs text-[#6b6560] uppercase tracking-wider">
                Use Case
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => (
              <tr key={i} className="border-b border-[#1a1a1a]">
                <td className="py-3 pr-4 text-[#e8e4dc] font-medium">
                  {item.name}
                </td>
                <td className="py-3 text-[#6b6560]">{item.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  // Fallback
  return (
    <ul className="list-disc list-inside text-sm text-[#6b6560] space-y-2">
      {content.map((item, i) => (
        <li key={i}>
          {typeof item === "object"
            ? Object.entries(item)
                .map(([k, v]) => `${k}: ${v}`)
                .join(" | ")
            : String(item)}
        </li>
      ))}
    </ul>
  );
}

export default function DocsRenderer({ data }) {
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = useMemo(() => {
    if (!data) return [];
    const map = new Map();
    const keys = Object.keys(data).filter((k) => k !== "last_updated");

    for (const key of keys) {
      const prefix = key.split("_")[0].toLowerCase();
      if (!map.has(prefix)) map.set(prefix, []);
      map.get(prefix).push({ key, value: data[key] });
    }

    const result = [];
    for (const prefix of desiredOrder) {
      if (map.has(prefix)) {
        result.push({ category: prefix, items: map.get(prefix) });
        map.delete(prefix);
      }
    }
    for (const [prefix, items] of map) {
      result.push({ category: prefix, items });
    }
    return result;
  }, [data]);

  const toggleCategory = (cat) => {
    setExpandedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  if (!data) {
    return (
      <div className="flex justify-center py-20">
        <div className="font-mono text-xs text-[#6b6560] animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {data.last_updated && (
        <div className="border-b-2 border-[#2a2a2a] pb-4 mb-8">
          <p className="font-mono text-xs text-[#6b6560]">
            Last updated: {data.last_updated}
          </p>
        </div>
      )}

      {categories.map(({ category, items }) => {
        const isExpanded = expandedCategories[category] !== false; // Default open
        const displayName = categoryDisplayNames[category] || category;

        return (
          <div key={category} className="border-b border-[#2a2a2a]">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between py-4 text-left group hover:bg-[#111] transition-colors px-2 -mx-2"
            >
              <h2 className="text-lg font-bold text-[#e8e4dc] group-hover:text-[#e85d04] transition-colors">
                {displayName}
              </h2>
              <span
                className={`font-mono text-xs text-[#6b6560] transition-transform ${isExpanded ? "rotate-90" : ""}`}
              >
                →
              </span>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 space-y-6">
                    {items.map(({ key, value }) => (
                      <div
                        key={key}
                        className="pl-4 border-l-2 border-[#2a2a2a]"
                      >
                        <h3 className="font-mono text-xs text-[#e85d04] uppercase tracking-wider mb-3">
                          {key.replace(/_/g, " ")}
                        </h3>
                        {renderContent(value)}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {categories.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-[#2a2a2a]">
          <p className="font-mono text-xs text-[#6b6560] uppercase tracking-widest">
            Empty
          </p>
        </div>
      )}
    </div>
  );
}
