// components/ModelsRenderer.js
"use client";

import { useState, useMemo } from "react";
import {
  Search,
  X,
  Zap,
  FileText,
  Filter,
  ChevronDown,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- Helper untuk kos ----------
function getDisplayCost(model) {
  if (model.pricingType === "token") {
    const inputRate = model.inputCreditsPerToken || 0;
    const outputRate = model.outputCreditsPerToken || 0;
    const est = (inputRate * 100 + outputRate * 200).toFixed(1);
    return `~${est} credits / msg`;
  }
  if (model.cost) return `${model.cost} credits`;
  if (model.usdCost) {
    const myr = (model.usdCost * 3.91 * 1.35).toFixed(2);
    return `RM ${myr}`;
  }
  return "Free";
}

// ---------- Helper: provider display ----------
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

// ---------- Helper: kategori model ----------
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

// ---------- Komponen Logo ----------
function ModelLogo({ model, size = 38 }) {
  const [imgError, setImgError] = useState(false);
  const logo = model.logo;

  if (!logo || imgError) {
    return (
      <div
        className="flex items-center justify-center bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold flex-shrink-0"
        style={{ width: size, height: size, fontSize: size * 0.35 }}
      >
        {model.name?.charAt(0).toUpperCase() || "?"}
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={model.name}
      onError={() => setImgError(true)}
      className="object-contain bg-white/5 flex-shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

// ---------- Kategori untuk tapisan ----------
const CATEGORIES = ["All", "Chat", "Image", "Video", "Audio", "3D", "Tools"];

// ---------- Komponen Utama ----------
export default function ModelsRenderer({ data }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProvider, setSelectedProvider] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // Senarai provider unik
  const providers = useMemo(() => {
    const set = new Set();
    data.forEach((m) => set.add(getDisplayProvider(m)));
    return ["All", ...Array.from(set).sort()];
  }, [data]);

  // Tapis model
  const filteredModels = useMemo(() => {
    let models = [...data];

    // Kategori
    if (activeCategory !== "All") {
      models = models.filter((m) => getCategory(m) === activeCategory);
    }

    // Carian
    if (search.trim()) {
      const q = search.toLowerCase();
      models = models.filter(
        (m) =>
          m.name?.toLowerCase().includes(q) ||
          m.id?.toLowerCase().includes(q) ||
          m.provider?.toLowerCase().includes(q) ||
          m.openRouterDescription?.toLowerCase().includes(q) ||
          m.descriptionEn?.toLowerCase().includes(q),
      );
    }

    // Provider
    if (selectedProvider !== "All") {
      models = models.filter((m) => getDisplayProvider(m) === selectedProvider);
    }

    return models;
  }, [data, activeCategory, search, selectedProvider]);

  return (
    <div className="space-y-6">
      {/* ===== BAR CARIAN ===== */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={16}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search models..."
          className="w-full pl-10 pr-10 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* ===== TAB KATEGORI ===== */}
      <div className="flex border-b border-white/10 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition ${
              activeCategory === cat
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== BUTANG TAPISAN PROVIDER ===== */}
      <div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <Filter size={16} />
          Filters
          <ChevronDown
            size={16}
            className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="border border-white/10 bg-white/5 p-4 mb-6">
              <label className="text-xs text-gray-400 block mb-2">
                Provider
              </label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full border border-gray-600 bg-gray-900 text-white px-3 py-2 text-sm focus:outline-none focus:border-purple-500/50"
              >
                {providers.map((p) => (
                  <option key={p} value={p}>
                    {p === "All" ? "All Providers" : p}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== GRID MODEL ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredModels.map((model) => {
          const desc =
            model.openRouterDescription ||
            model.descriptionEn ||
            model.descriptionMy ||
            "";
          const shortDesc = desc.length > 100 ? desc.slice(0, 100) + "…" : desc;

          return (
            <a
              key={model.id}
              href={`https://ai.atlasflux.my/explore/${model.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/10 bg-white/[0.03] hover:border-gray-500 p-5 transition no-underline"
            >
              <div className="flex items-start gap-4">
                <ModelLogo model={model} size={44} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white truncate">
                    {model.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {getDisplayProvider(model)}
                  </p>

                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {shortDesc}
                  </p>

                  {/* Metadata tambahan */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {model.contextWindow && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FileText size={12} />
                        {model.contextWindow >= 1000
                          ? `${(model.contextWindow / 1000).toFixed(0)}K`
                          : model.contextWindow}{" "}
                        tokens
                      </span>
                    )}
                    {model.capabilities?.vision && (
                      <span className="text-xs px-1.5 py-0.5 bg-blue-500/10 text-blue-300">
                        Vision
                      </span>
                    )}
                    {model.capabilities?.functionCalling && (
                      <span className="text-xs px-1.5 py-0.5 bg-green-500/10 text-green-300">
                        Tools
                      </span>
                    )}
                    {model.capabilities?.jsonMode && (
                      <span className="text-xs px-1.5 py-0.5 bg-yellow-500/10 text-yellow-300">
                        JSON
                      </span>
                    )}
                    {model.supportsNativeWebSearch && (
                      <span className="text-xs px-1.5 py-0.5 bg-purple-500/10 text-purple-300">
                        Web Search
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="flex items-center gap-1 text-sm font-semibold text-purple-400">
                      <Zap size={14} />
                      {getDisplayCost(model)}
                    </span>
                    <span className="text-xs text-gray-600 font-mono">
                      {model.id.length > 24
                        ? model.id.substring(0, 24) + "…"
                        : model.id}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {filteredModels.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <Cpu size={48} className="mx-auto mb-4 opacity-50" />
          <p>No models found.</p>
        </div>
      )}
    </div>
  );
}
