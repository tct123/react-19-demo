import { use } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { fetchPokemonList, type PokemonListItem } from "../utils";
import { capitalize } from "../utils/formatters";
import { TabHeader } from "./TabHeader";
import { styles } from "./styles";
import type { TabHeaderProps } from "./types";

export function PokemonList({ activeTab, onTabChange }: TabHeaderProps) {
  const pokemon = use(fetchPokemonList);

  return (
    <FlatList
      data={pokemon}
      renderItem={({ item }: { item: PokemonListItem }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.sprite }} style={styles.sprite} />
          <View style={styles.cardContent}>
            <Text style={styles.cardNumber}>
              #{item.id.toString().padStart(3, "0")}
            </Text>
            <Text style={styles.cardName}>{capitalize(item.name)}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <>
          <TabHeader activeTab={activeTab} onTabChange={onTabChange} />
          <View style={styles.listHeader}>
            <Text style={styles.sectionTitle}>First 20 Pokémon</Text>
            <Text style={styles.sectionSubtitle}>
              Using React 19's <Text style={styles.code}>use()</Text> hook to
              resolve the fetch promise
            </Text>
          </View>
        </>
      }
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.listContent}
      style={styles.list}
    />
  );
}

