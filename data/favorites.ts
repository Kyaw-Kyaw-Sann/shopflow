import { allProducts } from "./products";

const favoriteProductIds = new Set(["1", "3", "5"]);

export const favoriteProducts = allProducts.filter((product) =>
  favoriteProductIds.has(product.id),
);
