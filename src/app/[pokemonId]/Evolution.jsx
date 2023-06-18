"use client";

export default function Evolution({ evolutions }) {
  return (
    <div className="mb-4 grid grid-cols-2 gap-2 overflow-scroll">
      {evolutions.map((item, i) => {
        return <EvolutionItem key={i} evolutionName={item.species.name}></EvolutionItem>;
      })}
    </div>
  );
}

function EvolutionItem({ evolutionName }) {
  return (
    <div className="col-span-1 rounded-xl bg-sky-500 px-3 py-1 text-center align-middle text-lg font-bold text-gray-200">
      {evolutionName}
    </div>
  );
}
