import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  slug: {
    type: String,
    unique: true
  },

  description: String,

  category: {
    type: String   // using slug for frontend dummy phase
  },

  collections: [
    {
      type: String   // using slug instead of ObjectId for now
    }
  ],

  price: {
    type: Number,
    required: true
  },

  salePrice: {
    type: Number,
    default: null
  },

  images: [
    {
      url: String,
      altText: String
    }
  ],

  sku: String,

  stock: {
    type: Number,
    default: 0
  },

  tags: [String],

  rating: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

export default mongoose.model("Product", productSchema);