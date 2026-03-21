```
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    index: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String, // using slug for frontend dummy phase
    required: [true, "Category is required"]
  },
  collections: [
    {
      type: String // using slug instead of ObjectId for now
    }
  ],
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"]
  },
  salePrice: {
    type: Number,
    min: [0, "Sale price cannot be negative"],
    default: null
  },
  images: [
    {
      url: {
        type: String,
        required: true
      },
      altText: String
    }
  ],
  sku: {
    type: String,
    trim: true
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  tags: [String],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Pre-save hook to generate slug
productSchema.pre("save", function(next) {
  if (this.isModified("name") && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
  next();
});

export default mongoose.model("Product", productSchema);
```