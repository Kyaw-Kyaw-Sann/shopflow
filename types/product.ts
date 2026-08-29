export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  oldPrice?: number;
};