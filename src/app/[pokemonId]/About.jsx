"use client";

export default function About({ species, height, weight, abilities }) {
  return (
    <div className="flex flex-col gap-2">
      <AboutItem
        attribute={"Species"}
        value={species.charAt(0).toUpperCase() + species.slice(1)}></AboutItem>
      <AboutItem attribute={"Height"} value={height}></AboutItem>
      <AboutItem attribute={"Weight"} value={weight}></AboutItem>
      <AboutItem
        attribute={"Abilities"}
        value={abilities
          .split(", ")
          .map((item) => {
            return item.charAt(0).toUpperCase() + item.slice(1);
          })
          .join(", ")}></AboutItem>
    </div>
  );
}

function AboutItem({ attribute, value }) {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 text-gray-400">{attribute}</div>
      <div className="col-span-4 text-gray-600">{value}</div>
    </div>
  );
}
