// app/models/page.js
import ModelsRenderer from "../../components/ModelsRenderer";

export const revalidate = 3600;

export default async function ModelsPage() {
  let data = [];
  let error = null;

  try {
    const res = await fetch("https://ai.atlasflux.my/api/models", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch models");
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error || !data.length) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] text-[#e8e4dc] flex items-center justify-center lg:pl-20">
        <div className="text-center">
          <p className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-2">
            Error
          </p>
          <p className="text-sm">Failed to load models.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0c0c0c] text-[#e8e4dc] min-h-screen lg:pl-20">
      <div className="px-6 lg:px-16 py-16 lg:py-24 max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="font-mono text-xs text-[#6b6560] uppercase tracking-[0.2em] block mb-4">
            Directory
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            AI Models
          </h1>
          <p className="text-[#6b6560] max-w-md">
            Browse all available models. Pricing, capabilities, and provider
            info.
          </p>
        </div>

        <ModelsRenderer data={data} />
      </div>
    </div>
  );
}
