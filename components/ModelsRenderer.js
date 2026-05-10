"use client";
import Link from "next/link";

export default function ModelsRenderer({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((model) => (
        <div key={model.id} className="border border-white/10 p-5 rounded-lg">
          <img src={model.logo} alt="" className="h-10 w-10 mb-3" />
          <h3 className="font-bold text-lg">{model.name}</h3>
          <p className="text-sm text-gray-400">
            {model.openRouterDescription ||
              model.descriptionEn ||
              model.descriptionMy}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-purple-400">
              {model.cost || model.usdCost
                ? `${model.cost || "RM " + model.usdCost}`
                : "Free"}
            </span>
            <a
              href={`https://ai.atlasflux.my/explore/${encodeURIComponent(model.id)}`}
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              Try Model →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
