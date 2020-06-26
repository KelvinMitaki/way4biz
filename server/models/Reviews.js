const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }
});
const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
