import { Pressable, StyleSheet, Text, View } from "react-native";

import { CategoryItem } from "./CategoryItem";

const categories = [
  {
    id: "1",
    icon: "👕",
    label: "Fashion",
  },
  {
    id: "2",
    icon: "🎧",
    label: "Electronics",
  },
  {
    id: "3",
    icon: "🪑",
    label: "Home",
  },
  {
    id: "4",
    icon: "⚽",
    label: "Sports",
  },
];

export function CategoriesSection() {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Categories
        </Text>

        <Pressable
          onPress={() => {
            console.log("See all categories");
          }}
        >
          <Text style={styles.seeAllText}>
            See All
          </Text>
        </Pressable>
      </View>

      <View style={styles.categoriesRow}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            icon={category.icon}
            label={category.label}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  seeAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
  },

  categoriesRow: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});