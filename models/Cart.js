const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Product"
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true
  }
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
