// app/docs/page.js
import DocsRenderer from "../../components/DocsRenderer";

export const revalidate = 3600;

export default async function DocsPage() {
  let data = null;
  let error = null;

  try {
    const res = await fetch("https://ai.atlasflux.my/api/docs-content", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            ⚠️ Gagal memuat dokumentasi
          </h1>
          <p className="text-red-400 mb-2">{error || "Data tidak tersedia"}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-white text-black rounded-full"
          >
            Cuba Lagi
          </button>
        </div>
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
