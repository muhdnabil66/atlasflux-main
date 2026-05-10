"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Loader2 } from "lucide-react";

// ---------- FUNGSI PEMBERSIHAN (sama seperti di app AI) ----------
function cleanText(text) {
  if (!text) return text;
  // Buang emoji
  let cleaned = text.replace(/[\p{Emoji}]/gu, "").trim();
  // Ganti laluan teknikal dengan deskripsi
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
// --------------------------------------------------------------

export default function UpdatesRenderer() {
  const [data, setData] = useState([]);
  const [expandedDates, setExpandedDates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/updates")
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
        <Loader2 className="animate-spin text-purple-400" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-400 text-center py-20">
        Failed to load updates. Please try again later.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {data.map((day, idx) => {
        const isExpanded = expandedDates[day.date] || false;
        const formattedDate = new Date(day.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <div
            key={idx}
            className="border border-white/10 bg-white/[0.03] rounded-xl overflow-hidden backdrop-blur-sm"
          >
            {/* Header butang */}
            <button
              onClick={() => toggleDate(day.date)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                {day.emergency && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    Emergency
                  </span>
                )}
                <h2 className="text-lg font-semibold text-white">
                  {formattedDate}
                </h2>
              </div>
              {isExpanded ? (
                <ChevronDown size={20} className="text-gray-400" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>

            {/* Kandungan jika dikembangkan */}
            {isExpanded && (
              <div className="p-5 pt-2 space-y-5 border-t border-white/10">
                {day.entries.map((entry, eidx) => {
                  // Laman pendaratan guna English sahaja
                  const title = cleanTitle(entry.titleEn);
                  const details = cleanDetails(entry.detailsEn);

                  return (
                    <div
                      key={eidx}
                      className="pl-4 border-l-2 border-gray-700/50"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        {entry.time && (
                          <span className="font-mono text-xs text-gray-500">
                            {entry.time}
                          </span>
                        )}
                        {entry.time && (
                          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        )}
                        <span className="font-medium text-purple-400">
                          {title}
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-gray-400 space-y-1.5 text-sm">
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
            )}
          </div>
        );
      })}
    </div>
  );
}
