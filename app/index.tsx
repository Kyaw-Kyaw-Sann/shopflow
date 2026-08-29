import { StyleSheet, Text, View } from "react-native";

import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  name: "Nike Air Max 270",
  category: "Shoes",
  price: 129.99,
  rating: 4.8,
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShopFlow</Text>

      <Text style={styles.subtitle}>
        Discover products you love.
      </Text>

      <View style={styles.productSection}>
        <ProductCard product={product} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#666666",
  },

  productSection: {
    marginTop: 24,
  },
});