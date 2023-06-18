"use client";
import { useRouter } from "next/navigation";
import CardBackground from "@/assets/card-background.svg";

export default function PokemonCard({
  pokemonId,
  pokemonName,
  types,
  imageUrl,
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${pokemonId}`);
  };

  return (
    <div
      className="relative col-span-1 h-32 rounded-xl bg-cover px-3 pt-4"
      // className="relative col-span-1 h-32 rounded-xl bg-emerald-400 px-3 pt-4"
      style={{ backgroundImage: `url(${CardBackground.src})` }}
      onClick={handleClick}>
      <div className="col-span-1 grid auto-rows-auto gap-1">
        <div className="mb-2 capitalize text-white">{pokemonName}</div>

        {types.map((item, i) => {
          return (
            <div
              key={i}
              className="w-fit rounded-full bg-emerald-500 px-3 py-1 text-xs">
              {item.type.name}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-2 right-2">
        <img
          src={imageUrl}
          alt="pokemon"
          className="h-20 w-full object-contain"
        />
      </div>
    </div>
  );
}
