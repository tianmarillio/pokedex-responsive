import usePokemonDetails from "./usePokemonDetails";
import PokemonCard from "./PokemonCard";
import PokeballIcon from "@/assets/pokeball.svg";

export default async function Home() {
  const pokemonDetails = await usePokemonDetails();

  if (!pokemonDetails) return <div>Loading...</div>;

  return (
    <main className="container mx-auto h-full max-w-md bg-white py-4 text-black">
      {/* <div className="flex"> */}

      {/* <img src={PokeballIcon.src} className="inline mr-4 h-auto" /> */}
      <h1 className="mb-6 px-4 text-3xl font-bold">Pokedex</h1>
      {/* </div> */}

      <div className="grid grid-cols-2 gap-3 bg-white px-4">
        {pokemonDetails.map((pokemonDetail) => {
          return (
            <PokemonCard
              key={pokemonDetail.id}
              pokemonId={pokemonDetail.id}
              pokemonName={pokemonDetail.name}
              types={pokemonDetail.types}
              imageUrl={pokemonDetail.imageUrl}></PokemonCard>
          );
        })}
      </div>
    </main>
  );
}
