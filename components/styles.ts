import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    backgroundColor: "#ffffff",
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: -0.5,
  },
  appSubtitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  toggleButtonActive: {
    backgroundColor: "#EF5350",
  },
  toggleText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#666666",
  },
  toggleTextActive: {
    color: "#ffffff",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 32,
  },
  listHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: "#f5f5f5",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#666666",
    lineHeight: 18,
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#e8e8e8",
    color: "#d32f2f",
    paddingHorizontal: 4,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  sprite: {
    width: 64,
    height: 64,
  },
  itemSprite: {
    width: 48,
    height: 48,
    marginHorizontal: 8,
  },
  cardContent: {
    marginLeft: 12,
    flex: 1,
  },
  cardNumber: {
    fontSize: 12,
    color: "#EF5350",
    fontWeight: "600",
    marginBottom: 2,
  },
  cardName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  skeleton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
  },
  skeletonSprite: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  skeletonItemSprite: {
    width: 48,
    height: 48,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  skeletonNumber: {
    width: 40,
    height: 12,
    marginBottom: 6,
  },
  skeletonName: {
    width: 100,
    height: 17,
  },
});

