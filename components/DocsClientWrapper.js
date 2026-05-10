"use client";

import dynamic from "next/dynamic";

const DocsRenderer = dynamic(() => import("./DocsRenderer"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white" />
    </div>
  ),
});

export default function DocsClientWrapper({ data }) {
  return <DocsRenderer data={data} />;
}
