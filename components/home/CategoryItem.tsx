import { Pressable, StyleSheet, Text, View } from "react-native";

import type { Category } from "../../types/category";

type CategoryItemProps = {
  category: Category;
  variant?: "compact" | "grid";
};

export function CategoryItem({
  category,
  variant = "compact",
}: CategoryItemProps) {
  const isGrid = variant === "grid";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Browse ${category.label}`}
      style={({ pressed }) => [
        styles.container,
        isGrid && styles.gridContainer,
        pressed && styles.pressed,
      ]}
      onPress={() => {
        console.log(`${category.label} pressed`);
      }}
    >
      <View
        style={[
          styles.iconContainer,
          isGrid && styles.gridIconContainer,
        ]}
      >
        <Text style={[styles.icon, isGrid && styles.gridIcon]}>
          {category.icon}
        </Text>
      </View>

      <Text style={[styles.label, isGrid && styles.gridLabel]}>
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

  gridContainer: {
    flex: 1,
    minHeight: 148,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#eef0f3",
    borderRadius: 20,
    backgroundColor: "#ffffff",
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

  gridIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: "#eff6ff",
  },

  gridIcon: {
    fontSize: 30,
  },

  label: {
    marginTop: 8,
    fontSize: 12,
    color: "#374151",
  },

  gridLabel: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },

  pressed: {
    opacity: 0.78,
  },
});
