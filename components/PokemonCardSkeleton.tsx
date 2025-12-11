import { View } from "react-native";
import { SkeletonPulse } from "./SkeletonPulse";
import { styles } from "./styles";

export function PokemonCardSkeleton() {
  return (
    <View style={styles.card}>
      <SkeletonPulse style={styles.skeletonSprite} />
      <View style={styles.cardContent}>
        <SkeletonPulse style={styles.skeletonNumber} />
        <SkeletonPulse style={styles.skeletonName} />
      </View>
    </View>
  );
}

