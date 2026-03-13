import img1 from '../assets/image/image (1).png'
import img2 from '../assets/image/image (2).png'
import img3 from '../assets/image/image (3).png'
import img4 from '../assets/image/image (4).png'
import img5 from '../assets/image/image 4.png'
import img6 from '../assets/image/image 5.png'

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
        url: img1,
        altText: "Leather shoulder bag front view"
      },
      {
        url: img2,
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
        url: img3,
        altText: "Office dress front"
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
        url: img4,
        altText: "Knit sweater"
      }
    ],

    sku: "SWT-003",

    stock: 15,

    tags: ["sweater", "winter"],

    rating: 4.7,

    createdAt: "2026-02-20T08:30:00Z"
  },

  {
    _id: "p4",

    name: "Summer Floral Top",

    slug: "summer-floral-top",

    description: "Lightweight and breathable floral top for warm days.",

    category: "clothing",

    collections: ["summer", "new-arrivals"],

    price: 45,

    salePrice: 35,

    images: [
      {
        url: img5,
        altText: "Floral top front"
      }
    ],

    sku: "TOP-004",

    stock: 50,

    tags: ["top", "summer", "floral"],

    rating: 4.2,

    createdAt: "2026-03-05T14:15:00Z"
  },
  
  {
    _id: "p5",

    name: "Classic Denim Jacket",

    slug: "classic-denim-jacket",

    description: "A timeless denim jacket that pairs well with any outfit.",

    category: "clothing",

    collections: ["fall", "essentials"],

    price: 110,

    salePrice: 85,

    images: [
      {
        url: img6,
        altText: "Denim jacket front"
      }
    ],

    sku: "JKT-005",

    stock: 25,

    tags: ["jacket", "denim", "outerwear"],

    rating: 4.8,

    createdAt: "2026-01-15T11:45:00Z"
  },

  {
    _id: "p6",

    name: "Minimalist Gold Necklace",

    slug: "minimalist-gold-necklace",

    description: "Elegant and subtle gold necklace for everyday wear.",

    category: "accessories",

    collections: ["jewelry", "gifts"],

    price: 65,

    salePrice: null,

    images: [
      {
        url: img2,
        altText: "Gold necklace close up"
      }
    ],

    sku: "ACC-006",

    stock: 40,

    tags: ["necklace", "jewelry", "gold"],

    rating: 4.9,

    createdAt: "2026-02-10T16:20:00Z"
  }
];