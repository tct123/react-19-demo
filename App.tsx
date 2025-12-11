import { Activity, Suspense, useState } from "react";
import { View } from "react-native";
import {
  ItemsList,
  ItemsSkeleton,
  PokemonList,
  PokemonSkeleton,
  styles,
  type Tab,
} from "./components";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("pokemon");

  return (
    <View style={styles.container}>
      <Activity mode={activeTab === "pokemon" ? "visible" : "hidden"}>
        <Suspense
          fallback={
            <PokemonSkeleton onTabChange={setActiveTab} activeTab={activeTab} />
          }
        >
          <PokemonList activeTab={activeTab} onTabChange={setActiveTab} />
        </Suspense>
      </Activity>

      <Activity mode={activeTab === "items" ? "visible" : "hidden"}>
        <Suspense
          fallback={
            <ItemsSkeleton onTabChange={setActiveTab} activeTab={activeTab} />
          }
        >
          <ItemsList activeTab={activeTab} onTabChange={setActiveTab} />
        </Suspense>
      </Activity>
    </View>
  );
}
