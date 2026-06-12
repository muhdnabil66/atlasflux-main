// app/updates/page.js
import UpdatesRenderer from "../../components/UpdatesRenderer";

export const revalidate = 3600;

export default function UpdatesPage() {
  return (
    <div className="bg-[#0c0c0c] text-[#e8e4dc] min-h-screen lg:pl-20">
      <div className="px-6 lg:px-16 py-16 lg:py-24 max-w-4xl">
        <span className="font-mono text-xs text-[#6b6560] uppercase tracking-[0.2em] block mb-4">
          Changelog
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
          Updates
        </h1>
        <p className="text-[#6b6560] max-w-md mb-12">
          What we broke, what we fixed, and what we shipped.
        </p>
        <UpdatesRenderer />
      </div>
    </div>
  );
}
