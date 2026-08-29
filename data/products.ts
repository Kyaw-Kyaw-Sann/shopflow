import type { Product } from "../types/product";

export const popularProducts: Product[] = [
  {
    id: "1",
    name: "Nike Air Max 270",
    category: "Shoes",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.8,
    reviewCount: 2400,
    badge: "Sale",

    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",

    sizes: ["7", "8", "9", "10", "11"],

    colors: [
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "Gray",
        value: "#d1d5db",
      },
    ],

    description:
      "A lightweight everyday sneaker designed for comfort, clean styling, and all-day wear.",
  },
  {
    id: "2",
    name: "Apple Watch SE",
    category: "Smart Watch",
    price: 199.99,
    rating: 4.7,
    reviewCount: 1800,
    badge: "Popular",

    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80",

    colors: [
      {
        name: "Midnight",
        value: "#111827",
      },
      {
        name: "Silver",
        value: "#d1d5db",
      },
      {
        name: "Blue",
        value: "#2563eb",
      },
    ],

    description:
      "A versatile smartwatch for activity tracking, notifications, daily fitness, and essential smart features.",
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 279.99,
    rating: 4.9,
    reviewCount: 3200,

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "Silver",
        value: "#d1d5db",
      },
    ],

    description:
      "Premium noise-canceling headphones delivering industry-leading audio quality and all-day comfort.",
  },
  {
    id: "4",
    name: "Adidas Ultraboost",
    category: "Shoes",
    price: 179.99,
    rating: 4.6,
    reviewCount: 1200,
    badge: "New",

    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",

    sizes: ["7", "8", "9", "10", "11", "12"],

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "White",
        value: "#ffffff",
      },
    ],

    description:
      "High-performance running shoes featuring responsive cushioning and a flexible, breathable upper.",
  },
];

export const recommendedProducts: Product[] = [
  {
    id: "5",
    name: "Herschel Classic",
    category: "Backpack",
    price: 69.99,
    rating: 4.5,
    reviewCount: 860,

    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",

    colors: [
      {
        name: "Navy",
        value: "#1e3a8a",
      },
      {
        name: "Black",
        value: "#111111",
      },
    ],

    description:
      "A timeless, durable backpack perfect for everyday use, school, or light travel.",
  },
  {
    id: "6",
    name: "Ray-Ban Classic",
    category: "Sunglasses",
    price: 139.99,
    rating: 4.7,
    reviewCount: 740,

    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",

    colors: [
      {
        name: "Gold",
        value: "#d4af37",
      },
      {
        name: "Black",
        value: "#111111",
      },
    ],

    description:
      "Iconic sunglasses featuring a classic metal frame and polarized lenses for ultimate UV protection.",
  },
  {
    id: "7",
    name: "JBL Flip 6",
    category: "Speaker",
    price: 119.99,
    rating: 4.6,
    reviewCount: 920,

    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1200&q=80",

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "Blue",
        value: "#2563eb",
      },
      {
        name: "Red",
        value: "#ef4444",
      },
    ],

    description:
      "Portable waterproof Bluetooth speaker offering powerful sound and deep bass for any adventure.",
  },
  {
    id: "8",
    name: "New Balance 574",
    category: "Shoes",
    price: 89.99,
    rating: 4.4,
    reviewCount: 610,

    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",

    sizes: ["7", "8", "9", "10", "11"],

    colors: [
      {
        name: "Gray",
        value: "#9ca3af",
      },
      {
        name: "Navy",
        value: "#1e3a8a",
      },
      {
        name: "Burgundy",
        value: "#800020",
      },
    ],

    description:
      "Classic lifestyle sneakers combining retro design with modern comfort and durability.",
  },
];



export const allProducts: Product[] = [
  ...popularProducts,
  ...recommendedProducts,
];