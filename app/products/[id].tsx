import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import {
  popularProducts,
  recommendedProducts,
} from "../../data/products";

const allProducts = [
  ...popularProducts,
  ...recommendedProducts,
];

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const product = allProducts.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundTitle}>
          Product not found
        </Text>

        <Pressable
          style={styles.backButton}
          onPress={() => {
            router.back();
          }}
        >
          <Text style={styles.backButtonText}>
            Go Back
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
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
      </View>

      <View style={styles.info}>
        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>
            ⭐ {product.rating}
          </Text>

          <Text style={styles.reviewCount}>
            ({product.reviewCount} reviews)
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

        <Text style={styles.sectionTitle}>
          Description
        </Text>

        <Text style={styles.description}>
          This is a mock product description for
          {` ${product.name}`}. Product details,
          materials, shipping information and other
          information will appear here.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.addToCartButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => {
            console.log(
              `Add to cart: ${product.name}`
            );
          }}
        >
          <Text style={styles.addToCartText}>
            Add to Cart
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  content: {
    paddingBottom: 40,
  },

  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#f3f4f6",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  badge: {
    position: "absolute",
    top: 16,
    left: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#2563eb",
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#ffffff",
  },

  info: {
    padding: 20,
  },

  category: {
    fontSize: 14,
    color: "#6b7280",
  },

  name: {
    marginTop: 6,
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  ratingRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  rating: {
    fontSize: 14,
    fontWeight: "600",
  },

  reviewCount: {
    fontSize: 13,
    color: "#6b7280",
  },

  priceRow: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  price: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2563eb",
  },

  oldPrice: {
    fontSize: 16,
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },

  sectionTitle: {
    marginTop: 28,
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 23,
    color: "#6b7280",
  },

  addToCartButton: {
    marginTop: 30,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#2563eb",
  },

  buttonPressed: {
    opacity: 0.85,
  },

  addToCartText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },

  notFoundContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  notFoundTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  backButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#2563eb",
  },

  backButtonText: {
    fontWeight: "700",
    color: "#ffffff",
  },
});