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
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold tracking-tight mb-10">
          <span className="text-white/30">AtlasFlux</span> Documentation
        </h1>
        <DocsClientWrapper data={data} />
      </div>
    </div>
  );
}
