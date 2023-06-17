"use client";

export default function Moves({ moves }) {
  return (
    <div className="mb-4 grid grid-cols-2 gap-2 overflow-scroll">
      {moves.map((item, i) => {
        return <MovesItem key={i} moveName={item.move.name}></MovesItem>;
      })}
    </div>
  );
}

function MovesItem({ moveName }) {
  return (
    <div className="col-span-1 rounded-xl bg-sky-500 px-3 py-1 text-center align-middle text-lg font-bold text-gray-200">
      {moveName}
    </div>
  );
}
