const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  cart: {
    type: mongoose.Types.ObjectId,
    ref: "Cart"
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
