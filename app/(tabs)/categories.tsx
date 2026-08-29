import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { CategoryItem } from "../../components/home/CategoryItem";
import { categories } from "../../data/categories";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.categoryWrapper}>
            <CategoryItem category={item} variant="grid" />
          </View>
        )}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Categories</Text>
            <Text style={styles.description}>
              Browse products by category and find what you need.
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No categories available</Text>
            <Text style={styles.emptyDescription}>
              Please check back again soon.
            </Text>
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

  categoryWrapper: {
    flex: 1,
  },

  emptyState: {
    alignItems: "center",
    paddingTop: 72,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  emptyDescription: {
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
  },
});
