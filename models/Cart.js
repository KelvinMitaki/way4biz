const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  items: {
    type: [Object],
    required: true
  },
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
