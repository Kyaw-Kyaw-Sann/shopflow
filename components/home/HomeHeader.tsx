import { Pressable, StyleSheet, Text, View } from "react-native";

export function HomeHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello, Alex 👋</Text>

        <Text style={styles.subtitle}>
          Find the best products for you
        </Text>
      </View>

      <Pressable
        style={styles.notificationButton}
        onPress={() => {
          console.log("Notification pressed");
        }}
      >
        <Text style={styles.notificationIcon}>🔔</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#6b7280",
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  notificationIcon: {
    fontSize: 18,
  },
});