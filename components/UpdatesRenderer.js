"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function cleanText(text) {
  if (!text) return text;
  let cleaned = text.replace(/[\p{Emoji}]/gu, "").trim();
  const replacements = [
    [/\/chat(?![a-z])/gi, "the chat interface"],
    [/\/account(?![a-z])/gi, "account settings"],
    [/\/legal(?![a-z])/gi, "legal pages"],
    [/\/updates(?![a-z])/gi, "updates page"],
    [/\/docs(?![a-z])/gi, "documentation"],
    [/\/community(?![a-z])/gi, "community feed"],
    [/\/sign-in(?![a-z])/gi, "sign-in page"],
    [/\/purchase(?![a-z])/gi, "purchase page"],
    [/\/stats(?![a-z])/gi, "statistics page"],
    [/\/tools(?![a-z])/gi, "tools hub"],
    [/\/gallery(?![a-z])/gi, "gallery"],
    [/\/api(?![a-z])/gi, "API"],
  ];
  for (const [pattern, replacement] of replacements) {
    cleaned = cleaned.replace(pattern, replacement);
  }
  return cleaned;
}

function cleanDetails(details) {
  if (!details) return [];
  return details.map((d) => cleanText(d));
}

function cleanTitle(title) {
  return cleanText(title);
}

export default function UpdatesRenderer() {
  const [data, setData] = useState([]);
  const [expandedDates, setExpandedDates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ai.atlasflux.my/api/updates")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const toggleDate = (dateStr) => {
    setExpandedDates((prev) => ({ ...prev, [dateStr]: !prev[dateStr] }));
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="font-mono text-xs text-[#6b6560] animate-pulse">
          Loading changelog...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-2 border-dashed border-[#2a2a2a] p-12 text-center">
        <p className="font-mono text-xs text-[#e85d04] uppercase tracking-widest mb-2">
          Error
        </p>
        <p className="text-sm text-[#6b6560]">Failed to load updates.</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {data.map((day, idx) => {
        const isExpanded = expandedDates[day.date] !== false; // Default open
        const formattedDate = new Date(day.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <div key={idx} className="border-b border-[#2a2a2a]">
            <button
              onClick={() => toggleDate(day.date)}
              className="w-full flex items-center justify-between py-4 text-left group hover:bg-[#111] transition-colors px-2 -mx-2"
            >
              <div className="flex items-center gap-3">
                {day.emergency && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-[#e85d04] text-[#0c0c0c]">
                    !
                  </span>
                )}
                <span className="font-mono text-xs text-[#6b6560]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-base font-bold text-[#e8e4dc] group-hover:text-[#e85d04] transition-colors">
                  {formattedDate}
                </h2>
              </div>
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
                  <div className="pb-6 space-y-6 pl-12">
                    {day.entries.map((entry, eidx) => {
                      const title = cleanTitle(entry.titleEn);
                      const details = cleanDetails(entry.detailsEn);

                      return (
                        <div
                          key={eidx}
                          className="border-l-2 border-[#2a2a2a] pl-4"
                        >
                          <div className="flex items-baseline gap-3 mb-2">
                            {entry.time && (
                              <span className="font-mono text-xs text-[#3a3a3a]">
                                {entry.time}
                              </span>
                            )}
                            <span className="text-sm font-bold text-[#e8e4dc]">
                              {title}
                            </span>
                          </div>
                          <ul className="list-disc list-inside text-sm text-[#6b6560] space-y-1.5">
                            {details.map((detail, didx) => (
                              <li key={didx} className="leading-relaxed">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
