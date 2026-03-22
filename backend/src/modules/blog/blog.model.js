import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blog title is required"],
    trim: true,
    index: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
  content: {
    type: String,
    required: [true, "Blog content is required"]
  },
  excerpt: {
    type: String,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  featuredImage: {
    url: String,
    altText: String
  },
  tags: [String],
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
    index: true
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    canonicalUrl: String
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Pre-save hook for slug generation
blogSchema.pre("save", function(next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
  next();
});

export default mongoose.model("Blog", blogSchema);
