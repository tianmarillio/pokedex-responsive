export default async function getPokemonDetail(pokemonId) {
  const baseUrl = process.env.POKEAPI_BASE_URL

  const res = await fetch(`${baseUrl}/pokemon/${pokemonId}/`, {
    next: { revalidate: 300 },
  });

  // TODO: handle error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
