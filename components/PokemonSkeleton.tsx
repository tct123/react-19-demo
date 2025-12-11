import { FlatList, Text, View } from "react-native";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";
import { TabHeader } from "./TabHeader";
import { styles } from "./styles";
import type { TabHeaderProps } from "./types";

export function PokemonSkeleton({ activeTab, onTabChange }: TabHeaderProps) {
  return (
    <FlatList
      data={Array(8).fill(null)}
      renderItem={() => <PokemonCardSkeleton />}
      keyExtractor={(_, index) => index.toString()}
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

