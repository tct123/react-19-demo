import { FlatList, Text, View } from "react-native";
import { ItemCardSkeleton } from "./ItemCardSkeleton";
import { TabHeader } from "./TabHeader";
import { styles } from "./styles";
import type { TabHeaderProps } from "./types";

export function ItemsSkeleton({ activeTab, onTabChange }: TabHeaderProps) {
  return (
    <FlatList
      data={Array(8).fill(null)}
      renderItem={() => <ItemCardSkeleton />}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={
        <>
          <TabHeader activeTab={activeTab} onTabChange={onTabChange} />
          <View style={styles.listHeader}>
            <Text style={styles.sectionTitle}>First 20 Items</Text>
            <Text style={styles.sectionSubtitle}>
              Each tab has its own <Text style={styles.code}>Suspense</Text>{" "}
              boundary and <Text style={styles.code}>Activity</Text> wrapper
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

