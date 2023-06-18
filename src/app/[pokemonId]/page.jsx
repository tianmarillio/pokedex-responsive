import PokemonDetail from "./PokemonDetail";
import getPokemonDetail from "@/services/getPokemonDetail";

export default async function page({ params }) {
  let pokemonDetail = await getPokemonDetail(params.pokemonId);

  // TODO: refactor
  // Get images from separate source because original sprite too small (removed)
  const imageBaseUrl = process.env.POKEMON_IMAGE_BASE_URL;
  // const imageBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
  pokemonDetail = {
    ...pokemonDetail,
    imageUrl: `${imageBaseUrl}/${pokemonDetail.id}.svg`,
    // imageUrl: `${imageBaseUrl}/${pokemonDetail.id}.png`,
  };

  return <PokemonDetail pokemonDetail={pokemonDetail}></PokemonDetail>;
}
