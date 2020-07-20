const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    items: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product"
        },
        quantity: {
          type: Number,
          required: true
        },
        reviewed: {
          type: Boolean,
          default: false
        }
      }
    ],
    totalPrice: {
      type: Number,
      required: true
    },
    delivered: {
      type: Boolean,
      default: false
    },
    paymentMethod: {
      type: String,
      required: true
    },
    distance: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Distance"
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
