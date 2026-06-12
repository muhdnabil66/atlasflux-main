"use client";

export default function DocsErrorFallback({ error }) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#e8e4dc] flex items-center justify-center lg:pl-20 p-8">
      <div className="max-w-md">
        <span className="font-mono text-xs text-[#e85d04] uppercase tracking-widest block mb-4">
          Error
        </span>
        <h1 className="text-2xl font-bold mb-4">
          Failed to load documentation
        </h1>
        <p className="text-sm text-[#6b6560] mb-6 font-mono">
          {error || "Data not available"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#e85d04] text-[#0c0c0c] font-bold px-6 py-3 text-sm hover-lift"
        >
          Try Again →
        </button>
      </div>
    </div>
  );
}
