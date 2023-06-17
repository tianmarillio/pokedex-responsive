import getPokemonList from "@/services/getPokemonList";
import getPokemonDetailByUrl from "@/services/getPokemonDetailByUrl";

export default async function usePokemonDetails() {
  const { pokemons } = await getPokemonList();

  const getPokemonDetailsPromises = [];

  for (const pokemon of pokemons) {
    const promise = getPokemonDetailByUrl(pokemon.url);
    getPokemonDetailsPromises.push(promise);
  }

  let pokemonDetails = await Promise.all(getPokemonDetailsPromises);

  // Get images from separate source because original sprite too small (removed)
  const imageBaseUrl = process.env.POKEMON_IMAGE_BASE_URL;
  // const imageBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
  pokemonDetails = pokemonDetails.map((pokemonDetail) => {
    return {
      ...pokemonDetail,
      imageUrl: `${imageBaseUrl}/${pokemonDetail.id}.svg`,
      // imageUrl: `${imageBaseUrl}/${pokemonDetail.id}.png`,
    };
  });

  return pokemonDetails;
}
