export default async function getPokemonDetailByUrl(detailUrl) {
  const res = await fetch(`${detailUrl}`, {
    next: { revalidate: 300 },
  });

  // TODO: handle error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
