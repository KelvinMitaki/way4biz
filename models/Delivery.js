const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema(
  {
    driver: {
      type: mongoose.Types.ObjectId,
      ref: "Driver"
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    itemName: {
      type: String,
      required: true
    },
    itemQuantity: {
      type: Number,
      required: true
    },
    receiverFirstName: {
      type: String,
      required: true
    },
    receiverLastName: {
      type: String,
      required: true
    },
    receiverPhoneNumber: {
      type: Number,
      required: true
    },
    receiverCity: {
      type: String,
      required: true
    },
    receiverTown: {
      type: String,
      required: true
    },
    receiverAddress: {
      type: String,
      required: true
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

const Delivery = mongoose.model("Delivery", DeliverySchema);

module.exports = Delivery;
