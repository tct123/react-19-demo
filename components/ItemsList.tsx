import { use } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { fetchItems, type ItemListItem } from "../utils";
import { formatItemName } from "../utils/formatters";
import { TabHeader } from "./TabHeader";
import { styles } from "./styles";
import type { TabHeaderProps } from "./types";

export function ItemsList({ activeTab, onTabChange }: TabHeaderProps) {
  const items = use(fetchItems);

  return (
    <FlatList
      data={items}
      renderItem={({ item }: { item: ItemListItem }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.sprite }} style={styles.itemSprite} />
          <View style={styles.cardContent}>
            <Text style={styles.cardName}>{formatItemName(item.name)}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.name}
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

