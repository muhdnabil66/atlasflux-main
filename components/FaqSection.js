"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqSection({ faqs }) {
  const [active, setActive] = useState(null);
  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => (
        <div
          key={idx}
          className="border border-white/10 p-4 rounded-lg cursor-pointer hover:bg-white/5 transition"
          onClick={() => setActive(active === idx ? null : idx)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold">{item.q}</p>
            <ChevronDown
              size={16}
              className={`transform transition-transform ${active === idx ? "rotate-180" : ""}`}
            />
          </div>
          <AnimatePresence>
            {active === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 mt-3">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
