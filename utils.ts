const POKE_REST_BASE = "https://pokeapi.co/api/v2";
const SPRITES_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites";

export type PokemonListItem = {
  id: number;
  name: string;
  sprite: string;
};

export type ItemListItem = {
  name: string;
  sprite: string;
};

type PokeAPIListResponse = {
  results: Array<{ name: string; url: string }>;
};

// Extract Pokemon ID from URL like "https://pokeapi.co/api/v2/pokemon/1/"
const extractIdFromUrl = (url: string): number => {
  const parts = url.split("/").filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
};

// Artificial delay for demo purposes
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Fetch 20 Pokemon with their sprites (with 2s delay)
export const fetchPokemonList: Promise<PokemonListItem[]> = delay(2000)
  .then(() => fetch(`${POKE_REST_BASE}/pokemon?limit=20`))
  .then((r) => r.json())
  .then((data: PokeAPIListResponse) =>
    data.results.map((pokemon) => {
      const id = extractIdFromUrl(pokemon.url);
      return {
        id,
        name: pokemon.name,
        sprite: `${SPRITES_BASE}/pokemon/${id}.png`,
      };
    })
  );

// Fetch 20 Items with their sprites (with 2s delay)
export const fetchItems: Promise<ItemListItem[]> = delay(2000)
  .then(() => fetch(`${POKE_REST_BASE}/item?limit=20`))
  .then((r) => r.json())
  .then((data: PokeAPIListResponse) =>
    data.results.map((item) => ({
      name: item.name,
      sprite: `${SPRITES_BASE}/items/${item.name}.png`,
    }))
  );
