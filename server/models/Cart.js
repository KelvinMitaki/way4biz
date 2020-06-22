const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  products: {
    type: Array
  }
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
