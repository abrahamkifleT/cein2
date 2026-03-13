import banner1 from "../assets/image/Collection banner 1.png";
import banner2 from "../assets/image/Collection banner 2.png";
import banner3 from "../assets/image/Collection banner 3.png";
import banner4 from "../assets/image/Collection banner 4.png";
import banner5 from "../assets/image/Collection banner 5.png";

export const collections = [
  {
    _id: "col1",
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "Latest fashion products",
    bannerImage: banner1,
    isFeatured: true
  },
  {
    _id: "col2",
    name: "Office Looks",
    slug: "office-looks",
    description: "Professional office outfits",
    bannerImage: banner2,
    isFeatured: false
  },
  {
    _id: "col3",
    name: "Party and Events",
    slug: "party-events",
    description: "Stylish event collections",
    bannerImage: banner3,
    isFeatured: false
  },
  {
    _id: "col4",
    name: "Summer Essentials",
    slug: "summer-essentials",
    description: "Must-have summer items",
    bannerImage: banner4,
    isFeatured: false
  },
  {
    _id: "col5",
    name: "Accessories",
    slug: "accessories",
    description: "Complete your look",
    bannerImage: banner5,
    isFeatured: false
  }
];