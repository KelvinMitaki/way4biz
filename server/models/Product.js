const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
    type: Number
  },
  subcategory: {
    type: String,
    required: true
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
