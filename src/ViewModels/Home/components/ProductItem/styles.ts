import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#1A3E42",
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#ccc",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    overflow: "hidden",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
    flexWrap: "wrap",
  },
  description: {
    fontSize: 14,
    color: "#CCCCCC",
    flexWrap: "wrap",
  },
});
