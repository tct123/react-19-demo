import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import type { TabHeaderProps } from "./types";

export function TabHeader({ activeTab, onTabChange }: TabHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.appTitle}>Pokédex</Text>
      <Text style={styles.appSubtitle}>React 19 Demo</Text>
      <View style={styles.toggleContainer}>
        <Pressable
          style={[
            styles.toggleButton,
            activeTab === "pokemon" && styles.toggleButtonActive,
          ]}
          onPress={() => onTabChange("pokemon")}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === "pokemon" && styles.toggleTextActive,
            ]}
          >
            Pokémon
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.toggleButton,
            activeTab === "items" && styles.toggleButtonActive,
          ]}
          onPress={() => onTabChange("items")}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === "items" && styles.toggleTextActive,
            ]}
          >
            Items
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

