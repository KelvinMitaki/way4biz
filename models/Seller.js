const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
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
    unique: true,
    required: true
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
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  isSeller: {
    type: String,
    default: false
  },
  verified: {
    type: Boolean,
    default: false
  }
});

const Seller = mongoose.model("Seller", SellerSchema);

module.exports = Seller;
