import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { cartItems } from "../../data/cart";
import type { CartItem } from "../../types/cart";

const SHIPPING_COST = 8;

export default function CartScreen() {
  const [items, setItems] = useState(cartItems);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
    [items]
  );
  const shipping = items.length > 0 ? SHIPPING_COST : 0;
  const total = subtotal + shipping;

  function updateQuantity(productId: string, change: number) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  }

  function removeItem(productId: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <CartItemRow
            item={item}
            onDecrease={() => updateQuantity(item.product.id, -1)}
            onIncrease={() => updateQuantity(item.product.id, 1)}
            onRemove={() => removeItem(item.product.id)}
          />
        )}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>My Cart</Text>
            <Text style={styles.description}>
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </Text>
          </View>
        }
        ListFooterComponent={
          items.length > 0 ? (
            <View style={styles.summaryCard}>
              <SummaryRow label="Subtotal" value={subtotal} />
              <SummaryRow label="Shipping" value={shipping} />
              <View style={styles.summaryDivider} />
              <SummaryRow label="Total" value={total} isTotal />
              <Pressable
                style={({ pressed }) => [
                  styles.checkoutButton,
                  pressed && styles.pressed,
                ]}
                onPress={() => console.log("Checkout", { items, total })}
              >
                <Text style={styles.checkoutButtonText}>Checkout</Text>
              </Pressable>
            </View>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <View style={styles.emptyIconContainer}>
              <Ionicons name="bag-outline" size={34} color="#2563eb" />
            </View>
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptyDescription}>
              Start shopping to add products to your cart.
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.exploreButton,
                pressed && styles.pressed,
              ]}
              onPress={() => router.push("/")}
            >
              <Text style={styles.exploreButtonText}>Explore products</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

type CartItemRowProps = {
  item: CartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
};

function CartItemRow({
  item,
  onDecrease,
  onIncrease,
  onRemove,
}: CartItemRowProps) {
  const details = [item.selectedSize, item.selectedColor]
    .filter(Boolean)
    .join(" · ");

  return (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.product.image }} style={styles.image} />
      <View style={styles.itemContent}>
        <View style={styles.itemTopRow}>
          <View style={styles.itemText}>
            <Text style={styles.category}>{item.product.category}</Text>
            <Text style={styles.name} numberOfLines={1}>
              {item.product.name}
            </Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Remove ${item.product.name} from cart`}
            hitSlop={8}
            onPress={onRemove}
          >
            <Ionicons name="trash-outline" size={20} color="#9ca3af" />
          </Pressable>
        </View>
        {details ? <Text style={styles.details}>{details}</Text> : null}
        <View style={styles.itemBottomRow}>
          <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
          <View style={styles.quantityControl}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Decrease quantity"
              disabled={item.quantity === 1}
              style={({ pressed }) => [
                styles.quantityButton,
                item.quantity === 1 && styles.quantityButtonDisabled,
                pressed && styles.pressed,
              ]}
              onPress={onDecrease}
            >
              <Ionicons name="remove" size={17} color="#374151" />
            </Pressable>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Increase quantity"
              style={({ pressed }) => [
                styles.quantityButton,
                pressed && styles.pressed,
              ]}
              onPress={onIncrease}
            >
              <Ionicons name="add" size={17} color="#374151" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

type SummaryRowProps = {
  label: string;
  value: number;
  isTotal?: boolean;
};

function SummaryRow({ label, value, isTotal = false }: SummaryRowProps) {
  return (
    <View style={styles.summaryRow}>
      <Text style={isTotal ? styles.totalLabel : styles.summaryLabel}>{label}</Text>
      <Text style={isTotal ? styles.totalValue : styles.summaryValue}>
        ${value.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb" },
  content: { flexGrow: 1, padding: 20, paddingBottom: 36 },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: "800", color: "#111827" },
  description: { marginTop: 8, fontSize: 15, color: "#6b7280" },
  separator: { height: 14 },
  itemCard: {
    flexDirection: "row",
    gap: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "#eef0f3",
    borderRadius: 18,
    backgroundColor: "#ffffff",
  },
  image: { width: 96, height: 112, borderRadius: 12, backgroundColor: "#f3f4f6" },
  itemContent: { flex: 1, justifyContent: "space-between", paddingVertical: 2 },
  itemTopRow: { flexDirection: "row", gap: 8, justifyContent: "space-between" },
  itemText: { flex: 1 },
  category: { fontSize: 12, color: "#6b7280" },
  name: { marginTop: 4, fontSize: 16, fontWeight: "700", color: "#111827" },
  details: { marginTop: 8, fontSize: 13, color: "#6b7280" },
  itemBottomRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  price: { fontSize: 17, fontWeight: "800", color: "#111827" },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
  },
  quantityButton: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },
  quantityButtonDisabled: { opacity: 0.35 },
  quantity: { minWidth: 26, textAlign: "center", fontSize: 14, fontWeight: "700", color: "#111827" },
  summaryCard: {
    marginTop: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "#eef0f3",
    borderRadius: 18,
    backgroundColor: "#ffffff",
  },
  summaryRow: { flexDirection: "row", justifyContent: "space-between" },
  summaryLabel: { fontSize: 14, color: "#6b7280" },
  summaryValue: { fontSize: 14, fontWeight: "600", color: "#374151" },
  summaryDivider: { height: 1, marginVertical: 16, backgroundColor: "#eef0f3" },
  totalLabel: { fontSize: 18, fontWeight: "800", color: "#111827" },
  totalValue: { fontSize: 20, fontWeight: "800", color: "#2563eb" },
  checkoutButton: {
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#2563eb",
  },
  checkoutButtonText: { fontSize: 16, fontWeight: "700", color: "#ffffff" },
  emptyState: { flex: 1, alignItems: "center", justifyContent: "center", paddingBottom: 72 },
  emptyIconContainer: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 38,
    backgroundColor: "#eff6ff",
  },
  emptyTitle: { marginTop: 20, fontSize: 20, fontWeight: "800", color: "#111827" },
  emptyDescription: { maxWidth: 260, marginTop: 8, textAlign: "center", fontSize: 14, lineHeight: 21, color: "#6b7280" },
  exploreButton: { marginTop: 24, paddingHorizontal: 20, paddingVertical: 13, borderRadius: 12, backgroundColor: "#2563eb" },
  exploreButtonText: { fontSize: 14, fontWeight: "700", color: "#ffffff" },
  pressed: { opacity: 0.82 },
});
