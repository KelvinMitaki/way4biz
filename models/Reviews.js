const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  order: {
    type: mongoose.Types.ObjectId,
    ref: "Order",
    required: true
  }
});
const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
