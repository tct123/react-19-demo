# Simple Pokédex

A React Native demo showcasing **React 19** features: the `use` hook and the `Activity` component.

## React 19 Features Demonstrated

### `use()` Hook

The `use` hook allows you to read the value of a promise directly in a component. When combined with `Suspense`, React automatically handles the loading state.

```tsx
function PokemonList() {
  const pokemon = use(fetchPokemonList); // Resolves the promise directly!
  
  return (
    <FlatList data={pokemon} ... />
  );
}
```

No more `useEffect` + `useState` + loading state boilerplate.

### `Activity` Component

The `Activity` component controls whether its children are "visible" or "hidden" without unmounting them. This preserves state and avoids re-fetching data when switching tabs.

```tsx
<Activity mode={activeTab === "pokemon" ? "visible" : "hidden"}>
  <Suspense fallback={<PokemonSkeleton />}>
    <PokemonList />
  </Suspense>
</Activity>
```

Both tabs render simultaneously, but only the active one is visible. Switching tabs is instant after the initial load.

## Project Structure

```
simple-pokedex/
├── App.tsx                      # Main app with Activity + Suspense
├── components/
│   ├── index.ts                 # Barrel exports
│   ├── types.ts                 # Shared types
│   ├── styles.ts                # Shared styles
│   ├── TabHeader.tsx            # Tab toggle header
│   ├── SkeletonPulse.tsx        # Animated skeleton component
│   ├── PokemonCardSkeleton.tsx  # Pokemon card skeleton
│   ├── ItemCardSkeleton.tsx     # Item card skeleton
│   ├── PokemonSkeleton.tsx      # Pokemon list skeleton (loading state)
│   ├── ItemsSkeleton.tsx        # Items list skeleton (loading state)
│   ├── PokemonList.tsx          # Pokemon list with use() hook
│   └── ItemsList.tsx            # Items list with use() hook
├── utils/
│   └── formatters.ts            # String formatting utilities
└── utils.ts                     # Data fetching promises
```

## Getting Started

```bash
# Install dependencies
bun install

# Start the app
bun start
```

## Tech Stack

- React 19.2.0
- React Native 0.83.0
- Expo 55
- TypeScript

## Data Source

Data is fetched from [PokeAPI](https://pokeapi.co/).

