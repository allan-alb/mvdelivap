import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: "#0F2A2E",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  categoriesContainer: {
    paddingVertical: 8,
  },
  categoriesContentContainer: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: "#1A3E42",
    borderWidth: 1,
    borderColor: "#2A4E52",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryButtonSelected: {
    backgroundColor: "#2A6B73",
    borderColor: "#3A8B93",
    shadowColor: "#3A8B93",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    transform: [{ scale: 1.05 }],
  },
  categoryText: {
    color: "#CCCCCC",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  categoryTextSelected: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
