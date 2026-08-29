import type { CartItem } from "../types/cart";
import { allProducts } from "./products";

const cartItemDetails: Record<
  string,
  Omit<CartItem, "product">
> = {
  "1": {
    quantity: 1,
    selectedSize: "9",
    selectedColor: "Black",
  },
  "5": {
    quantity: 2,
    selectedColor: "Navy",
  },
};

export const cartItems: CartItem[] = allProducts.flatMap((product) => {
  const details = cartItemDetails[product.id];

  return details ? [{ product, ...details }] : [];
});
