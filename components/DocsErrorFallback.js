"use client";

export default function DocsErrorFallback({ error }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">⚠️ Gagal memuat dokumentasi</h1>
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
