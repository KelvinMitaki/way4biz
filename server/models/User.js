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
    type: String,
    required: true
  },
  number: {
    type: Number
  },
  isSeller: {
    type: Boolean,
    default: false
  },
  verified: {
    type: Boolean,
    default: false
  },
  cart: {
    type: mongoose.Types.ObjectId,
    ref: "Cart"
  }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
