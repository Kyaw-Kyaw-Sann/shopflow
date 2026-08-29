import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import { profile } from "../../data/profile";

const accountItems = [
  { label: "My Orders", icon: "receipt-outline" },
  { label: "Saved Addresses", icon: "location-outline" },
  { label: "Payment Methods", icon: "card-outline" },
] as const;

const supportItems = [
  { label: "Settings", icon: "settings-outline" },
  { label: "Help and Support", icon: "help-circle-outline" },
] as const;

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{profile.initials}</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.editButton, pressed && styles.pressed]}
          onPress={() => console.log("Edit profile")}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
      </View>

      <ProfileSection title="Account" items={accountItems} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.menuCard}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="notifications-outline" size={20} color="#2563eb" />
          </View>
          <View style={styles.menuText}>
            <Text style={styles.menuLabel}>Notifications</Text>
            <Text style={styles.menuDescription}>Get updates about orders and offers</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            trackColor={{ false: "#d1d5db", true: "#93c5fd" }}
            thumbColor={notificationsEnabled ? "#2563eb" : "#f9fafb"}
            onValueChange={setNotificationsEnabled}
          />
        </View>
      </View>

      <ProfileSection title="Support" items={supportItems} />

      <Pressable
        accessibilityRole="button"
        style={({ pressed }) => [styles.signOutButton, pressed && styles.pressed]}
        onPress={() => console.log("Sign out")}
      >
        <Ionicons name="log-out-outline" size={20} color="#dc2626" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </ScrollView>
  );
}

type ProfileSectionProps = {
  title: string;
  items: readonly { label: string; icon: React.ComponentProps<typeof Ionicons>["name"] }[];
};

function ProfileSection({ title, items }: ProfileSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.menuCard}>
        {items.map((item, index) => (
          <View key={item.label}>
            {index > 0 ? <View style={styles.menuDivider} /> : null}
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}
              onPress={() => console.log(`${item.label} pressed`)}
            >
              <View style={styles.menuIconContainer}>
                <Ionicons name={item.icon} size={20} color="#2563eb" />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={19} color="#9ca3af" />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb" },
  content: { padding: 20, paddingBottom: 36 },
  title: { fontSize: 28, fontWeight: "800", color: "#111827" },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eef0f3",
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  avatar: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 29,
    backgroundColor: "#2563eb",
  },
  avatarText: { fontSize: 20, fontWeight: "800", color: "#ffffff" },
  profileInfo: { flex: 1, marginLeft: 13 },
  name: { fontSize: 17, fontWeight: "800", color: "#111827" },
  email: { marginTop: 4, fontSize: 13, color: "#6b7280" },
  editButton: { paddingHorizontal: 13, paddingVertical: 8, borderRadius: 10, backgroundColor: "#eff6ff" },
  editButtonText: { fontSize: 13, fontWeight: "700", color: "#2563eb" },
  section: { marginTop: 28 },
  sectionTitle: { marginBottom: 10, fontSize: 15, fontWeight: "700", color: "#6b7280" },
  menuCard: { overflow: "hidden", borderWidth: 1, borderColor: "#eef0f3", borderRadius: 18, backgroundColor: "#ffffff" },
  menuItem: { flexDirection: "row", alignItems: "center", minHeight: 64, paddingHorizontal: 16 },
  menuIconContainer: { width: 36, height: 36, alignItems: "center", justifyContent: "center", borderRadius: 12, backgroundColor: "#eff6ff" },
  menuText: { flex: 1, marginLeft: 12 },
  menuLabel: { flex: 1, marginLeft: 12, fontSize: 15, fontWeight: "600", color: "#111827" },
  menuDescription: { marginTop: 3, fontSize: 12, color: "#6b7280" },
  menuDivider: { height: 1, marginLeft: 64, backgroundColor: "#eef0f3" },
  signOutButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 32, paddingVertical: 15, borderRadius: 14, backgroundColor: "#fef2f2" },
  signOutText: { fontSize: 15, fontWeight: "700", color: "#dc2626" },
  pressed: { opacity: 0.76 },
});
