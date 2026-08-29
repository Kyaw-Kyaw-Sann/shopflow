import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Products",
        }}
      />

      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Product Detail",
        }}
      />
    </Stack>
  );
}
