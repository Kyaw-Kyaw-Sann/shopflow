import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { router } from "expo-router";

import type { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";

type ProductSectionProps = {
  title: string;
  products: Product[];
};

export function ProductSection({
  title,
  products,
}: ProductSectionProps) {
  function handleSeeAll() {
    router.push("/products/index");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Pressable onPress={handleSeeAll}>
          <Text style={styles.seeAll}>
            See All
          </Text>
        </Pressable>
      </View>

      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  seeAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
  },

  listContent: {
    paddingTop: 16,
    paddingRight: 20,
  },

  separator: {
    width: 14,
  },
});
