// app/docs/page.js
import DocsRenderer from "../../components/DocsRenderer";

// Revalidate setiap 1 jam (3600 saat)
export const revalidate = 3600;

export default async function DocsPage() {
  let data = null;
  let error = null;

  try {
    const res = await fetch("https://ai.atlasflux.my/api/docs-content", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-red-400">
          Failed to load documentation. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold tracking-tight mb-10">
          <span className="text-white/30">AtlasFlux</span> Documentation
        </h1>
        <DocsRenderer data={data} />
      </div>
    </div>
  );
}
