export default async function getEvolutions(pokemonId) {
  const baseUrl = process.env.POKEAPI_BASE_URL;

  const res = await fetch(`${baseUrl}/evolution-chain/${pokemonId}/`, {
    next: { revalidate: 300 },
  });

  // TODO: handle error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data?.chain?.evolves_to || []
}
