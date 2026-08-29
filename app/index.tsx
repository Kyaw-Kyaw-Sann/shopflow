import { StyleSheet, View } from "react-native";

import { CategoriesSection } from "../components/home/CategoriesSession";
import { HomeHeader } from "../components/home/HomeHeader";
import { PromoBanner } from "../components/home/PromoBanner";
import { SearchBar } from "../components/home/SearchBar";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />

      <SearchBar />

      <PromoBanner />

      <CategoriesSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#f5f7fb",
  },
});