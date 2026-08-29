import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ProductCard } from "../../components/home/ProductCard";
import {
  popularProducts,
  recommendedProducts,
} from "../../data/products";

const allProducts = [
  ...popularProducts,
  ...recommendedProducts,
];

export default function ProductListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Pressable
          style={styles.filterButton}
          onPress={() => {
            console.log("Filter pressed");
          }}
        >
          <Text style={styles.filterText}>
            Filter
          </Text>
        </Pressable>

        <Pressable
          style={styles.sortButton}
          onPress={() => {
            console.log("Sort pressed");
          }}
        >
          <Text style={styles.sortText}>
            Sort: Popular
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={allProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productWrapper}>
            <ProductCard product={item} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  toolbar: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },

  filterText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },

  sortButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },

  sortText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },

  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  productWrapper: {
    alignItems: "center",
  },

  separator: {
    height: 16,
  },
});