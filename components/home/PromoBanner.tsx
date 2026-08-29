import { Pressable, StyleSheet, Text, View } from "react-native";

export function PromoBanner() {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerLabel}>SUMMER SALE</Text>

        <Text style={styles.bannerTitle}>
          Up to 50% Off
        </Text>

        <Pressable
          style={styles.shopButton}
          onPress={() => {
            console.log("Shop now pressed");
          }}
        >
          <Text style={styles.shopButtonText}>
            Shop Now
          </Text>
        </Pressable>
      </View>

      <View style={styles.bannerImagePlaceholder}>
        <Text style={styles.imageText}>Image</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginTop: 20,
    minHeight: 170,
    padding: 20,
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2563eb",
  },

  bannerContent: {
    flex: 1,
    justifyContent: "center",
  },

  bannerLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#dbeafe",
  },

  bannerTitle: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: "800",
    color: "#ffffff",
  },

  shopButton: {
    alignSelf: "flex-start",
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },

  shopButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2563eb",
  },

  bannerImagePlaceholder: {
    width: 110,
    alignItems: "center",
    justifyContent: "center",
  },

  imageText: {
    color: "#dbeafe",
  },
});