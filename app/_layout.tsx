import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
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