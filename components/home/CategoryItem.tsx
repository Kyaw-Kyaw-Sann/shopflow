import { Pressable, StyleSheet, Text, View } from "react-native";

type CategoryItemProps = {
  icon: string;
  label: string;
};

export function CategoryItem({
  icon,
  label,
}: CategoryItemProps) {
  return (
    <Pressable
      style={styles.categoryItem}
      onPress={() => {
        console.log(`${label} pressed`);
      }}
    >
      <View style={styles.categoryIcon}>
        <Text style={styles.categoryEmoji}>
          {icon}
        </Text>
      </View>

      <Text style={styles.categoryLabel}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    width: 72,
    alignItems: "center",
  },

  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  categoryEmoji: {
    fontSize: 24,
  },

  categoryLabel: {
    marginTop: 8,
    fontSize: 12,
    color: "#374151",
  },
});