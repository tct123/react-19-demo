import { View } from "react-native";
import { SkeletonPulse } from "./SkeletonPulse";
import { styles } from "./styles";

export function ItemCardSkeleton() {
  return (
    <View style={styles.card}>
      <SkeletonPulse style={styles.skeletonItemSprite} />
      <View style={styles.cardContent}>
        <SkeletonPulse style={styles.skeletonName} />
      </View>
    </View>
  );
}

