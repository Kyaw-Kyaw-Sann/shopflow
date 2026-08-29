import { Pressable, StyleSheet, Text, View } from "react-native";

export function SearchBar() {
  return (
    <Pressable
      style={styles.searchBar}
      onPress={() => {
        console.log("Search pressed");
      }}
    >
      <Text style={styles.searchIcon}>🔍</Text>

      <Text style={styles.searchPlaceholder}>
        Search products, brands...
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20,
    height: 52,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 14,
    backgroundColor: "#ffffff",
  },

  searchIcon: {
    fontSize: 18,
  },

  searchPlaceholder: {
    flex: 1,
    fontSize: 15,
    color: "#9ca3af",
  },
});