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
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Failed to load models.
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">AI Models Directory</h1>
        {/* USE the component */}
        <ModelsRenderer data={data} />
      </div>
    </div>
  );
}
