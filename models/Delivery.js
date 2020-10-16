const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema(
  {
    driver: {
      type: mongoose.Types.ObjectId,
      ref: "Driver"
    },
    delivered: {
      type: Boolean,
      default: false
    },
    deliveryDate: {
      type: Date
    }
  },
  { timestamps: true }
);
