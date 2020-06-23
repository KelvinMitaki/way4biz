const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  cart: {
    type: mongoose.Types.ObjectId,
    ref: "Cart"
  }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
