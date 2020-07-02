const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    stockQuantity: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    freeShipping: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      required: true
    },
    subcategory: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "Under Review"
    },
    seller: {
      type: mongoose.Types.ObjectId,
      ref: "Seller",
      required: true
    }
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
