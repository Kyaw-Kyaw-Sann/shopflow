import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favorites
      </Text>

      <Text style={styles.description}>
        Your saved products will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f7fb",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    color: "#6b7280",
  },
});