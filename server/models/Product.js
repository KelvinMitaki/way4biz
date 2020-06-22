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
  quantity: {
    type: Number,
    required: true
  },
  rating: {
    type: Number
  },
  subcategory: {
    type: String,
    required: true
  }
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
