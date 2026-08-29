import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function PromoBanner() {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerLabel}>
          SUMMER SALE
        </Text>

        <Text style={styles.bannerTitle}>
          Up to 50% Off
        </Text>

        <Text style={styles.bannerDescription}>
          Discover this season's best deals.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.shopButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => {
            console.log("Shop now pressed");
          }}
        >
          <Text style={styles.shopButtonText}>
            Shop Now
          </Text>
        </Pressable>
      </View>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
        }}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginTop: 20,
    marginRight: 20,
    minHeight: 180,
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2563eb",
  },

  bannerContent: {
    flex: 1,
    zIndex: 1,
    justifyContent: "center",
    padding: 20,
  },

  bannerLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#bfdbfe",
  },

  bannerTitle: {
    marginTop: 6,
    fontSize: 25,
    fontWeight: "800",
    color: "#ffffff",
  },

  bannerDescription: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    color: "#dbeafe",
  },

  shopButton: {
    alignSelf: "flex-start",
    marginTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },

  shopButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#2563eb",
  },

  buttonPressed: {
    opacity: 0.8,
  },

  bannerImage: {
    width: 125,
    height: "100%",
  },
});