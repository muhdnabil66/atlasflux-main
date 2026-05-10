// app/updates/page.js (laman pendaratan)
import UpdatesRenderer from "../../components/UpdatesRenderer";

// ISR: halaman ini akan disegarkan semula setiap jam
export const revalidate = 3600;

export default function UpdatesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">Updates</h1>
        <UpdatesRenderer />
      </div>
    </div>
  );
}
