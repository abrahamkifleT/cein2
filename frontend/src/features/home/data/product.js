export const products = [
  {
    _id: "p1",

    name: "Leather Shoulder Bag",

    slug: "leather-shoulder-bag",

    description: "Premium handmade leather shoulder bag perfect for everyday use.",

    category: "bags",

    collections: ["new-arrivals", "office-looks"],

    price: 120,

    salePrice: 95,

    images: [
      {
        url: "/images/products/bag1.jpg",
        altText: "Leather shoulder bag front view"
      },
      {
        url: "/images/products/bag2.jpg",
        altText: "Leather shoulder bag side view"
      }
    ],

    sku: "BAG-001",

    stock: 35,

    tags: ["bag", "leather", "fashion"],

    rating: 4.6,

    createdAt: "2026-03-01T10:00:00Z"
  },

  {
    _id: "p2",

    name: "Elegant Office Dress",

    slug: "elegant-office-dress",

    description: "Stylish office dress designed for professional women.",

    category: "clothing",

    collections: ["office-looks"],

    price: 150,

    salePrice: 130,

    images: [
      {
        url: "/images/products/dress1.jpg",
        altText: "Office dress front"
      },
      {
        url: "/images/products/dress2.jpg",
        altText: "Office dress back"
      }
    ],

    sku: "DRS-002",

    stock: 20,

    tags: ["dress", "office", "fashion"],

    rating: 4.3,

    createdAt: "2026-02-28T09:00:00Z"
  },

  {
    _id: "p3",

    name: "Casual Knit Sweater",

    slug: "casual-knit-sweater",

    description: "Warm and comfortable knit sweater for casual wear.",

    category: "clothing",

    collections: ["winter", "new-arrivals"],

    price: 80,

    salePrice: null,

    images: [
      {
        url: "/images/products/sweater1.jpg",
        altText: "Knit sweater"
      }
    ],

    sku: "SWT-003",

    stock: 15,

    tags: ["sweater", "winter"],

    rating: 4.7,

    createdAt: "2026-02-20T08:30:00Z"
  }
];