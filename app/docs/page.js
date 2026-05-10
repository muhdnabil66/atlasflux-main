// app/docs/page.js
import DocsRenderer from "../../components/DocsRenderer";

export const revalidate = 3600;

export default async function DocsPage() {
  let data = null;
  let error = null;
  let status = null;

  try {
    const res = await fetch("/api/docs-content", {
      next: { revalidate: 3600 },
    });
    status = res.status;
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    const text = await res.text(); // ambil sebagai teks dahulu
    try {
      data = JSON.parse(text);
    } catch (parseError) {
      throw new Error(
        `Invalid JSON response (first 200 chars): ${text.substring(0, 200)}`,
      );
    }
  } catch (err) {
    error = err.message;
  }

  // Debug – papar semua maklumat jika ada masalah
  if (error || !data) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold mb-4">⚠️ Gagal memuat dokumentasi</h1>
        {status && <p className="text-gray-400">Status HTTP: {status}</p>}
        {error && (
          <p className="text-red-400 mt-2 bg-red-900/20 p-3 rounded">{error}</p>
        )}
        {!error && !data && <p className="text-gray-400">Data kosong (null)</p>}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-white text-black rounded-full"
        >
          Cubaa Lagi
        </button>
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
