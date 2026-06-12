// app/docs/page.js
import DocsClientWrapper from "../../components/DocsClientWrapper";
import DocsErrorFallback from "../../components/DocsErrorFallback";

export const revalidate = 3600;

export default async function DocsPage() {
  let data = null;
  let error = null;

  try {
    const res = await fetch("https://ai.atlasflux.my/api/docs-content", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error || !data) {
    return <DocsErrorFallback error={error} />;
  }

  return (
    <div className="bg-[#0c0c0c] text-[#e8e4dc] min-h-screen lg:pl-20">
      <div className="px-6 lg:px-16 py-16 lg:py-24 max-w-4xl">
        <span className="font-mono text-xs text-[#6b6560] uppercase tracking-[0.2em] block mb-4">
          Reference
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
          Documentation
        </h1>
        <p className="text-[#6b6560] max-w-md mb-12">
          Everything you need to know about AtlasFlux. No fluff.
        </p>
        <DocsClientWrapper data={data} />
      </div>
    </div>
  );
}
