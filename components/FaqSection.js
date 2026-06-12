"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection({ faqs }) {
  const [active, setActive] = useState(null);

  return (
    <div className="space-y-0">
      {faqs.map((item, idx) => (
        <div key={idx} className="border-b border-[#2a2a2a]">
          <button
            onClick={() => setActive(active === idx ? null : idx)}
            className="w-full flex items-start justify-between py-4 text-left group hover:bg-[#111] transition-colors px-2 -mx-2"
          >
            <span className="font-mono text-xs text-[#3a3a3a] w-8 shrink-0 pt-1">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-sm font-bold text-[#e8e4dc] group-hover:text-[#e85d04] transition-colors pr-4">
              {item.q}
            </span>
            <span
              className={`font-mono text-xs text-[#6b6560] transition-transform ${active === idx ? "rotate-90" : ""}`}
            >
              →
            </span>
          </button>

          <AnimatePresence>
            {active === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pb-4 pl-12 pr-4">
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
