import ModelsRenderer from "../../components/ModelsRenderer";

export const revalidate = 3600;

export default async function ModelsPage() {
  let data = null;
  let error = null;

  try {
    const res = await fetch("/api/models", { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch models");
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-red-400">Failed to load models.</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">AI Models Directory</h1>
        <ModelsRenderer data={data} />
      </div>
    </div>
  );
}
