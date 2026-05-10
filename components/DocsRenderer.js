"use client";
export default function ModelsRenderer({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((model) => (
        <div key={model.id} className="border border-white/10 p-5 rounded-lg">
          {model.logo && (
            <img src={model.logo} alt="" className="h-10 w-10 mb-3" />
          )}
          <h3 className="font-bold text-lg">{model.name}</h3>
          <p className="text-sm text-gray-400">
            {model.openRouterDescription ||
              model.descriptionEn ||
              model.descriptionMy}
          </p>
        </div>
      ))}
    </div>
  );
}
