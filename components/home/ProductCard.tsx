import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { router } from "expo-router";

import type { Product } from "../../types/product";
import { formatReviewCount } from "../../utils/formatReviewCount";

type ProductCardProps = {
  product: Product;
  variant?: "default" | "grid";
  isFavorite?: boolean;
  onFavoritePress?: (product: Product) => void;
};

export function ProductCard({
  product,
  variant = "default",
  isFavorite = false,
  onFavoritePress,
}: ProductCardProps) {
  function handleProductPress() {
    router.push({
      pathname: "/products/[id]",
      params: { id: product.id },
    });
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        variant === "grid" && styles.gridCard,
        pressed && styles.cardPressed,
      ]}
      onPress={handleProductPress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
          resizeMode="cover"
        />

        {product.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {product.badge}
            </Text>
          </View>
        )}

        <Pressable
          style={({ pressed }) => [
            styles.favoriteButton,
            isFavorite && styles.favoriteButtonActive,
            pressed && styles.favoritePressed,
          ]}
          onPress={(event) => {
            event.stopPropagation();

            if (onFavoritePress) {
              onFavoritePress(product);
              return;
            }

            console.log(`Favorite: ${product.name}`);
          }}
        >
          <Text style={styles.favoriteIcon}>
            ♡
          </Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text
          style={styles.name}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {product.name}
        </Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>
            ⭐ {product.rating}
          </Text>

          <Text style={styles.reviewCount}>
            ({formatReviewCount(product.reviewCount)})
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>
            ${product.price.toFixed(2)}
          </Text>

          {product.oldPrice && (
            <Text style={styles.oldPrice}>
              ${product.oldPrice.toFixed(2)}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 190,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#eef0f3",
  },

  gridCard: {
    width: "100%",
  },

  cardPressed: {
    opacity: 0.88,
  },

  imageContainer: {
    width: "100%",
    aspectRatio: 1.15,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "#2563eb",
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#ffffff",
  },

  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.92)",
  },

  favoritePressed: {
    opacity: 0.7,
  },

  favoriteButtonActive: {
    backgroundColor: "#fee2e2",
  },

  favoriteIcon: {
    fontSize: 22,
    color: "#111827",
  },

  content: {
    padding: 14,
  },

  category: {
    fontSize: 12,
    color: "#6b7280",
  },

  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  ratingRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  rating: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
  },

  reviewCount: {
    fontSize: 12,
    color: "#9ca3af",
  },

  priceRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  price: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },

  oldPrice: {
    fontSize: 13,
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },
});
