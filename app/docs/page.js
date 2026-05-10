// app/docs/page.js
export const revalidate = 3600;

export default async function DocsPage() {
  let data = null;
  let error = null;

  try {
    const res = await fetch("/api/docs-content", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    data = JSON.parse(text);
  } catch (err) {
    error = err.message;
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-2xl font-bold mb-4">Gagal memuat dokumentasi</h1>
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <pre className="text-xs text-green-400">
        {JSON.stringify(data, null, 2).slice(0, 500)}...
      </pre>
    </div>
  );
}
