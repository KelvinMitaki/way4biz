const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
