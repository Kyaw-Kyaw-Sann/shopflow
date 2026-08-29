import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Profile
      </Text>

      <Text style={styles.description}>
        Manage your account and preferences.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f7fb",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    color: "#6b7280",
  },
});