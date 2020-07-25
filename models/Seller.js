const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    storeName: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },
    city: {
      type: String,
      required: true
    },
    town: {
      type: String
    },
    address: {
      type: String,
      required: true
    },
    isSeller: {
      type: Boolean,
      default: false
    },
    verifiedPhoneNumber: {
      type: Boolean,
      default: false
    },
    verified: {
      type: Boolean,
      default: false
    },
    imageUrl: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

const Seller = mongoose.model("Seller", SellerSchema);

module.exports = Seller;
