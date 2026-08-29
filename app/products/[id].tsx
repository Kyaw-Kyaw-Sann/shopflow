import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  Stack,
  router,
  useLocalSearchParams,
} from "expo-router";

import { useMemo, useState } from "react";

import { allProducts } from "../../data/products";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const product = useMemo(() => {
    return allProducts.find((item) => item.id === id);
  }, [id]);

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product?.sizes?.[0] ?? null
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name ?? null
  );

  const [quantity, setQuantity] = useState(1);

  const [isFavorite, setIsFavorite] = useState(false);

  const [descriptionExpanded, setDescriptionExpanded] =
    useState(false);

  if (!product) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundTitle}>
          Product not found
        </Text>

        <Pressable
          style={styles.notFoundButton}
          onPress={() => {
            router.back();
          }}
        >
          <Text style={styles.notFoundButtonText}>
            Go Back
          </Text>
        </Pressable>
      </View>
    );
  }

  function incrementQuantity() {
    setQuantity((current) => current + 1);
  }

  function decrementQuantity() {
    setQuantity((current) => {
      return Math.max(1, current - 1);
    });
  }

 function handleAddToCart() {
  if (!product) return;

  console.log({
    productId: product.id,
    size: selectedSize,
    color: selectedColor,
    quantity,
  });
}

  const discountPercent =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : null;

  return (
    <View style={styles.screen}>
      <Stack.Screen
        options={{
          title: product.name,
          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageSection}>
          <Image
            source={{
              uri: product.image,
            }}
            style={styles.productImage}
            resizeMode="cover"
          />

          <Pressable
            style={({ pressed }) => [
              styles.favoriteButton,
              pressed && styles.pressed,
            ]}
            onPress={() => {
              setIsFavorite((current) => !current);
            }}
          >
            <Text style={styles.favoriteIcon}>
              {isFavorite ? "♥" : "♡"}
            </Text>
          </Pressable>
        </View>

        <View style={styles.content}>
          <Text style={styles.category}>
            {product.category}
          </Text>

          <Text style={styles.productName}>
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

            {discountPercent && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  {discountPercent}% OFF
                </Text>
              </View>
            )}
          </View>

          {product.sizes && product.sizes.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  Size
                </Text>

                <Pressable
                  onPress={() => {
                    console.log("Size guide");
                  }}
                >
                  <Text style={styles.sectionAction}>
                    Size guide
                  </Text>
                </Pressable>
              </View>

              <View style={styles.sizeRow}>
                {product.sizes.map((size) => {
                  const selected =
                    selectedSize === size;

                  return (
                    <Pressable
                      key={size}
                      style={({ pressed }) => [
                        styles.sizeButton,

                        selected &&
                          styles.sizeButtonSelected,

                        pressed && styles.pressed,
                      ]}
                      onPress={() => {
                        setSelectedSize(size);
                      }}
                    >
                      <Text
                        style={[
                          styles.sizeText,

                          selected &&
                            styles.sizeTextSelected,
                        ]}
                      >
                        {size}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}

          {product.colors && product.colors.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Color
              </Text>

              <Text style={styles.selectedColorLabel}>
                {selectedColor}
              </Text>

              <View style={styles.colorRow}>
                {product.colors.map((color) => {
                  const selected =
                    selectedColor === color.name;

                  return (
                    <Pressable
                      key={color.name}
                      style={[
                        styles.colorOuter,

                        selected &&
                          styles.colorOuterSelected,
                      ]}
                      onPress={() => {
                        setSelectedColor(color.name);
                      }}
                    >
                      <View
                        style={[
                          styles.colorSwatch,
                          {
                            backgroundColor:
                              color.value,
                          },
                        ]}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Description
            </Text>

            <Text
              style={styles.description}
              numberOfLines={
                descriptionExpanded ? undefined : 3
              }
              ellipsizeMode="tail"
            >
              {product.description ??
                "Product description is not available yet."}
            </Text>

            <Pressable
              onPress={() => {
                setDescriptionExpanded(
                  (current) => !current
                );
              }}
            >
              <Text style={styles.moreText}>
                {descriptionExpanded
                  ? "Show less"
                  : "More"}
              </Text>
            </Pressable>
          </View>

          <View style={styles.extraBottomSpace} />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.quantityControl}>
          <Pressable
            style={styles.quantityButton}
            onPress={decrementQuantity}
          >
            <Text style={styles.quantityButtonText}>
              −
            </Text>
          </Pressable>

          <Text style={styles.quantityText}>
            {quantity}
          </Text>

          <Pressable
            style={styles.quantityButton}
            onPress={incrementQuantity}
          >
            <Text style={styles.quantityButtonText}>
              +
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.addToCartButton,
            pressed && styles.pressed,
          ]}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>
            Add to Cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 100,
  },

  imageSection: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#f3f4f6",
    position: "relative",
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  favoriteButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
  },

  favoriteIcon: {
    fontSize: 27,
    color: "#111827",
  },

  pressed: {
    opacity: 0.75,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 22,
  },

  category: {
    fontSize: 14,
    color: "#6b7280",
  },

  productName: {
    marginTop: 5,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
    color: "#111827",
  },

  ratingRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  rating: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
  },

  reviewCount: {
    fontSize: 13,
    color: "#6b7280",
  },

  priceRow: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  price: {
    fontSize: 25,
    fontWeight: "800",
    color: "#2563eb",
  },

  oldPrice: {
    fontSize: 16,
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },

  discountBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "#dbeafe",
  },

  discountText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#2563eb",
  },

  section: {
    marginTop: 28,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  sectionAction: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2563eb",
  },

  sizeRow: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  sizeButton: {
    minWidth: 46,
    height: 44,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  sizeButtonSelected: {
    borderColor: "#2563eb",
    backgroundColor: "#2563eb",
  },

  sizeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },

  sizeTextSelected: {
    color: "#ffffff",
  },

  selectedColorLabel: {
    marginTop: 5,
    fontSize: 13,
    color: "#6b7280",
  },

  colorRow: {
    marginTop: 14,
    flexDirection: "row",
    gap: 12,
  },

  colorOuter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },

  colorOuterSelected: {
    borderColor: "#2563eb",
  },

  colorSwatch: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },

  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 23,
    color: "#6b7280",
  },

  moreText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "700",
    color: "#2563eb",
  },

  extraBottomSpace: {
    height: 20,
  },

  bottomBar: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    backgroundColor: "#ffffff",
  },

  quantityControl: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d1d5db",
    overflow: "hidden",
  },

  quantityButton: {
    width: 42,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    fontSize: 21,
    color: "#111827",
  },

  quantityText: {
    minWidth: 28,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },

  addToCartButton: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563eb",
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

  notFoundButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#2563eb",
  },

  notFoundButtonText: {
    fontWeight: "700",
    color: "#ffffff",
  },
});