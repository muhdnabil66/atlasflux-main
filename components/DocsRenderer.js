// components/DocsRenderer.js
"use client";

import { useMemo } from "react";
import { BookOpen, Shield, Zap, HelpCircle, FileText } from "lucide-react";

// ---------- MAPPING PREFIX KE NAMA PENUH ----------
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

// ---------- Helper untuk tentukan ikon kategori ----------
function getCategoryIcon(category) {
  const lower = category.toLowerCase();
  if (lower === "security" || lower === "legal") return <Shield size={20} />;
  if (lower === "faq" || lower === "support") return <HelpCircle size={20} />;
  if (lower === "models") return <BookOpen size={20} />;
  if (lower === "updates") return <FileText size={20} />;
  return <Zap size={20} />;
}

// ---------- Komponen untuk satu seksyen ----------
function SectionBlock({ title, children, icon }) {
  return (
    <div className="border border-white/10 bg-white/[0.03] rounded-xl p-5 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
        {icon && <span className="text-purple-400">{icon}</span>}
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

// ---------- Helper untuk render content (string, array, atau table) ----------
function renderContent(id, content) {
  if (typeof content === "string") {
    return (
      <p className="text-gray-300 text-sm whitespace-pre-line">{content}</p>
    );
  }

  if (!Array.isArray(content)) {
    // fallback: objek yang bukan array
    return <p className="text-gray-300 text-sm">{JSON.stringify(content)}</p>;
  }

  // Array kosong
  if (content.length === 0) {
    return <p className="text-gray-500 text-sm italic">— Empty —</p>;
  }

  // Tentukan kalau array of objects dan ada struktur tertentu
  const firstItem = content[0];
  if (typeof firstItem !== "object" || firstItem === null) {
    // Array of primitives (string/number)
    return (
      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
        {content.map((item, i) => (
          <li key={i}>{String(item)}</li>
        ))}
      </ul>
    );
  }

  // ---- TABLE: FAQ (ada q, a) ----
  if (firstItem.q !== undefined && firstItem.a !== undefined) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 pr-4 font-semibold text-purple-400 w-1/3">
                Question
              </th>
              <th className="py-2 font-semibold text-purple-400">Answer</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2 pr-4 text-white font-medium">{item.q}</td>
                <td className="py-2 text-gray-300">{item.a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ---- TABLE: TOOLS TABLE (ada tool, cost, desc) ----
  if (firstItem.tool !== undefined) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 pr-4 font-semibold text-purple-400">Tool</th>
              <th className="py-2 pr-4 font-semibold text-purple-400">Cost</th>
              <th className="py-2 font-semibold text-purple-400">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2 pr-4 text-white font-medium">
                  {item.tool}
                </td>
                <td className="py-2 pr-4 text-green-400">{item.cost}</td>
                <td className="py-2 text-gray-300">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ---- TABLE: MODEL LIST (ada name, use) ----
  if (firstItem.name !== undefined && firstItem.use !== undefined) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 pr-4 font-semibold text-purple-400">Model</th>
              <th className="py-2 font-semibold text-purple-400">Use Case</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2 pr-4 text-white font-medium">
                  {item.name}
                </td>
                <td className="py-2 text-gray-300">{item.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ---- TABLE: PURCHASE PACKS (array of strings) ----
  // atau array objek lain yang kita tak kenal pasti, fallback ke list biasa
  return (
    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
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

// ---------- Subseksyen ----------
function SubSection({ id, title, content }) {
  return (
    <div id={id} className="pl-2">
      {title && (
        <h3 className="text-sm font-semibold text-purple-400 mb-2 capitalize">
          {title.replace(/_/g, " ")}
        </h3>
      )}
      {renderContent(id, content)}
    </div>
  );
}

// ---------- Komponen Utama ----------
export default function DocsRenderer({ data }) {
  const categories = useMemo(() => {
    if (!data) return [];
    const map = new Map();
    const keys = Object.keys(data).filter((k) => k !== "last_updated");

    // Urutan kategori yang kita mahu
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
    // Yang tertinggal
    for (const [prefix, items] of map) {
      result.push({ category: prefix, items });
    }
    return result;
  }, [data]);

  if (!data) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {data.last_updated && (
        <p className="text-sm text-gray-400 italic border-b border-white/10 pb-4">
          {data.last_updated}
        </p>
      )}

      {categories.map(({ category, items }) => {
        const displayName = categoryDisplayNames[category] || category;
        return (
          <SectionBlock
            key={category}
            title={displayName}
            icon={getCategoryIcon(category)}
          >
            {items.map(({ key, value }) => (
              <SubSection key={key} id={key} title={key} content={value} />
            ))}
          </SectionBlock>
        );
      })}

      {categories.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
          <p>Documentation is empty.</p>
        </div>
      )}
    </div>
  );
}
