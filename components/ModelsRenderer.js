// components/ModelsRenderer.js
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "https://ai.atlasflux.my";

function getDisplayCost(model) {
  if (model.pricingType === "token") {
    const inputRate = model.inputCreditsPerToken || 0;
    const outputRate = model.outputCreditsPerToken || 0;
    const est = (inputRate * 100 + outputRate * 200).toFixed(1);
    return `~${est} credits/msg`;
  }
  if (model.cost) return `${model.cost} credits`;
  if (model.usdCost) {
    const myr = (model.usdCost * 3.91 * 1.35).toFixed(2);
    return `RM ${myr}`;
  }
  return "Free";
}

function getDisplayProvider(model) {
  const provider = model.provider || "";
  if (
    provider.includes("/") ||
    provider.toLowerCase() === "replicate" ||
    [
      "lucataco",
      "cjwbw",
      "xinntao",
      "tencentarc",
      "bria",
      "nightmareai",
      "organisciak",
      "fofr",
      "datacte",
      "leonardoai",
      "wavespeedai",
      "prunaai",
      "recraft-ai",
      "ideogram-ai",
      "bytedance",
      "minimax",
      "kwaivgi",
      "pixverse",
      "veed",
      "arielreplicate",
    ].some((name) => provider.toLowerCase().includes(name))
  ) {
    return "Replicate";
  }
  return provider;
}

function getCategory(model) {
  const type = model.type?.toLowerCase() || "";
  const id = model.id?.toLowerCase() || "";
  if (type === "image") return "Image";
  if (type === "video" || type === "t2v" || type === "i2v") return "Video";
  if (id.includes("music") || id.includes("lyria") || type === "audio")
    return "Audio";
  if (id.includes("3d") || id.includes("hunyuan-3d") || type === "3d")
    return "3D";
  if (
    id.includes("remove-background") ||
    id.includes("gfpgan") ||
    id.includes("real-esrgan") ||
    id.includes("poster") ||
    id.includes("fill-pro") ||
    id.includes("face-restoration") ||
    id.includes("upscaler") ||
    id.includes("voice") ||
    id.includes("xtts") ||
    id.includes("demucs") ||
    id.includes("paraphrase") ||
    id.includes("email") ||
    id.includes("image-prompt") ||
    id.includes("sticker") ||
    id.includes("deoldify")
  )
    return "Tools";
  return "Chat";
}

const CATEGORIES = ["All", "Chat", "Image", "Video", "Audio", "3D", "Tools"];

export default function ModelsRenderer({ data }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const filteredModels = useMemo(() => {
    let models = [...data];
    if (activeCategory !== "All") {
      models = models.filter((m) => getCategory(m) === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      models = models.filter(
        (m) =>
          m.name?.toLowerCase().includes(q) ||
          m.id?.toLowerCase().includes(q) ||
          m.provider?.toLowerCase().includes(q),
      );
    }
    return models;
  }, [data, activeCategory, search]);

  return (
    <div className="space-y-8">
      {/* Search — raw, utilitarian */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between border-b-2 border-[#2a2a2a] pb-6">
        <div className="w-full sm:max-w-md">
          <label className="font-mono text-xs text-[#6b6560] uppercase tracking-widest block mb-2">
            Search Models
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="gpt, claude, image, etc."
            className="w-full bg-transparent border-2 border-[#2a2a2a] px-4 py-3 text-sm text-[#e8e4dc] placeholder-[#3a3a3a] focus:border-[#e85d04] focus:outline-none transition-colors font-mono"
          />
        </div>
        <div className="font-mono text-xs text-[#6b6560]">
          {filteredModels.length} models found
        </div>
      </div>

      {/* Category tabs — raw, tabular */}
      <div className="flex flex-wrap gap-1 border-b border-[#2a2a2a]">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border-b-2 transition-colors ${
              activeCategory === cat
                ? "border-[#e85d04] text-[#e8e4dc]"
                : "border-transparent text-[#6b6560] hover:text-[#e8e4dc]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Models list — table/list hybrid */}
      <div className="space-y-0">
        {filteredModels.map((model, idx) => {
          const isExpanded = expandedId === model.id;
          const desc =
            model.openRouterDescription ||
            model.descriptionEn ||
            model.descriptionMy ||
            "";
          const shortDesc = desc.length > 120 ? desc.slice(0, 120) + "…" : desc;
          const isMYRModel =
            model.usdCost !== undefined ||
            (model.prices && model.prices.length > 0);
          const detailUrl = isMYRModel
            ? `${BASE_URL}/pricing/models/${model.id}`
            : `${BASE_URL}/explore/${model.id}`;

          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.02 }}
              className="border-b border-[#2a2a2a] group"
            >
              {/* Main row */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : model.id)}
                className="w-full flex items-start gap-4 py-4 px-2 hover:bg-[#111] transition-colors text-left"
              >
                {/* Number */}
                <span className="font-mono text-xs text-[#3a3a3a] w-8 shrink-0 pt-1">
                  {String(idx + 1).padStart(3, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="font-bold text-sm lg:text-base group-hover:text-[#e85d04] transition-colors">
                        {model.name}
                      </h3>
                      <p className="font-mono text-xs text-[#6b6560] mt-0.5">
                        {getDisplayProvider(model)} · {getCategory(model)}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#e85d04] shrink-0">
                      {getDisplayCost(model)}
                    </span>
                  </div>

                  <p className="text-xs text-[#6b6560] line-clamp-1 group-hover:line-clamp-none transition-all">
                    {shortDesc}
                  </p>
                </div>

                {/* Expand icon */}
                <span
                  className={`text-[#6b6560] transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                >
                  →
                </span>
              </button>

              {/* Expanded detail */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 pr-4 pb-6 pt-2 space-y-4">
                      <p className="text-sm text-[#e8e4dc] leading-relaxed">
                        {desc || "No description available."}
                      </p>

                      {/* Metadata grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                        {model.contextWindow && (
                          <div className="border border-[#2a2a2a] p-3">
                            <span className="text-[#6b6560] block mb-1">
                              Context
                            </span>
                            <span className="text-[#e8e4dc]">
                              {model.contextWindow >= 1000
                                ? `${(model.contextWindow / 1000).toFixed(0)}K`
                                : model.contextWindow}{" "}
                              tokens
                            </span>
                          </div>
                        )}
                        {model.capabilities?.vision && (
                          <div className="border border-[#2a2a2a] p-3">
                            <span className="text-[#6b6560] block mb-1">
                              Vision
                            </span>
                            <span className="text-[#e8e4dc]">Enabled</span>
                          </div>
                        )}
                        {model.capabilities?.functionCalling && (
                          <div className="border border-[#2a2a2a] p-3">
                            <span className="text-[#6b6560] block mb-1">
                              Tools
                            </span>
                            <span className="text-[#e8e4dc]">
                              Function Call
                            </span>
                          </div>
                        )}
                        <div className="border border-[#2a2a2a] p-3">
                          <span className="text-[#6b6560] block mb-1">ID</span>
                          <span className="text-[#e8e4dc] truncate block">
                            {model.id}
                          </span>
                        </div>
                      </div>

                      <a
                        href={detailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#e85d04] text-[#0c0c0c] font-bold px-4 py-2 text-sm hover-lift"
                      >
                        Open in App →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {filteredModels.length === 0 && (
        <div className="py-24 text-center border-2 border-dashed border-[#2a2a2a]">
          <p className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-2">
            No Results
          </p>
          <p className="text-sm text-[#6b6560]">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}
