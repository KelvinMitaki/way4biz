const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    type: String
  },
  phoneNumber: {
    type: Number
  },
  city: {
    type: String
  },
  town: {
    type: String
  },
  address: {
    type: String
  },
  isSeller: {
    type: Boolean,
    default: false
  },
  verified: {
    type: Boolean,
    default: false
  },
  googleId: {
    type: String
  },
  address: {
    type: String
  },
  cart: {
    type: mongoose.Types.ObjectId,
    ref: "Cart"
  }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
