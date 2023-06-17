"use client";

export default function BaseStats({ stats }) {
  return (
    <div className="flex flex-col gap-2">
      {stats.map((stat, i) => {
        return (
          <BaseStatsItem
            key={i}
            attribute={stat.attribute.replace("special-", "Sp. ")} // FIXME: move format to helper
            value={stat.value}></BaseStatsItem>
        );
      })}
    </div>
  );
}

function BaseStatsItem({ attribute, value }) {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 capitalize text-gray-400">{attribute}</div>
      <div className="col-span-1 text-gray-600">{value}</div>
      <div className="col-span-3 flex items-center">
        <ProgressBar value={value}></ProgressBar>
      </div>
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-300">
      <div
        className={`${
          value >= 50 ? "bg-green-600" : "bg-red-600"
        } h-1.5 rounded-full`}
        style={{ width: `${value >= 100 ? 100 : value}%` }}></div>
    </div>
  );
}
