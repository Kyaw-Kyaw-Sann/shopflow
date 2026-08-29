import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        console.log(product.id);
      }}
    >
      <View style={styles.imagePlaceholder}>
        <Text>Image</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>
            ${product.price.toFixed(2)}
          </Text>

          <Text>
            ⭐ {product.rating}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },

  imagePlaceholder: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
  },

  imageText: {
    color: "#777777",
  },

  content: {
    padding: 16,
  },

  category: {
    fontSize: 13,
    color: "#777777",
  },

  name: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "600",
  },

  footer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
  },

  rating: {
    fontSize: 14,
  },
});