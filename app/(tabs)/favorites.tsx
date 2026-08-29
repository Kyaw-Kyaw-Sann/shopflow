import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ProductCard } from "../../components/home/ProductCard";
import { favoriteProducts } from "../../data/favorites";
import type { Product } from "../../types/product";

export default function FavoritesScreen() {
  const [products, setProducts] = useState(favoriteProducts);

  function handleRemoveFavorite(product: Product) {
    setProducts((currentProducts) =>
      currentProducts.filter((item) => item.id !== product.id)
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productWrapper}>
            <ProductCard
              product={item}
              variant="grid"
              isFavorite
              onFavoritePress={handleRemoveFavorite}
            />
          </View>
        )}
        contentContainerStyle={styles.content}
        columnWrapperStyle={products.length > 0 ? styles.row : undefined}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Favorites</Text>
            <Text style={styles.description}>
              Your saved products, all in one place.
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <View style={styles.emptyIconContainer}>
              <Ionicons name="heart-outline" size={34} color="#2563eb" />
            </View>
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyDescription}>
              Save products you love to find them here.
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.exploreButton,
                pressed && styles.pressed,
              ]}
              onPress={() => router.push("/")}
            >
              <Text style={styles.exploreButtonText}>Explore products</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },
  content: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 36,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: "#6b7280",
  },
  row: {
    gap: 14,
    marginBottom: 14,
  },
  productWrapper: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 72,
  },
  emptyIconContainer: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 38,
    backgroundColor: "#eff6ff",
  },
  emptyTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },
  emptyDescription: {
    maxWidth: 260,
    marginTop: 8,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 21,
    color: "#6b7280",
  },
  exploreButton: {
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: "#2563eb",
  },
  exploreButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
  },
  pressed: {
    opacity: 0.82,
  },
});
