export type ProductColor = {
  name: string;
  value: string;
};

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

  sizes?: string[];
  colors?: ProductColor[];

  description?: string;
};