export default async function getPokemonList() {
  const baseUrl = process.env.POKEAPI_BASE_URL;
  // TODO: pagination
  // TODO: test caching vs pagination
  const res = await fetch(`${baseUrl}/pokemon?limit=12&offset=0`, {
    next: { revalidate: 300 },
  });

  // TODO: handle error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return { pokemons: data.results };
}
