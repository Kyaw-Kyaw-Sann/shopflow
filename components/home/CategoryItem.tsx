import { Pressable, StyleSheet, Text, View } from "react-native";

import type { Category } from "../../types/category";

type CategoryItemProps = {
  category: Category;
};

export function CategoryItem({
  category,
}: CategoryItemProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        console.log(`${category.label} pressed`);
      }}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          {category.icon}
        </Text>
      </View>

      <Text style={styles.label}>
        {category.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 72,
    alignItems: "center",
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  icon: {
    fontSize: 24,
  },

  label: {
    marginTop: 8,
    fontSize: 12,
    color: "#374151",
  },
});