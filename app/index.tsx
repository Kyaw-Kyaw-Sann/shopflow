import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { CategoriesSection } from "../components/home/CategoriesSession";
import { HomeHeader } from "../components/home/HomeHeader";
import { ProductSection } from "../components/home/ProductSection";
import { PromoBanner } from "../components/home/PromoBanner";
import { SearchBar } from "../components/home/SearchBar";

import {
  popularProducts,
  recommendedProducts,
} from "../data/products";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />

      <SearchBar />

      <PromoBanner />

      <CategoriesSection />

      <ProductSection
        title="Popular Products"
        products={popularProducts}
      />

      <ProductSection
        title="Recommended for You"
        products={recommendedProducts}
      />

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  content: {
    paddingTop: 20,
    paddingLeft: 20,
  },

  bottomSpace: {
    height: 40,
  },
});