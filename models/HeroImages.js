const mongoose = require("mongoose");

const heroImageSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const heroImage = mongoose.model("heroImage", heroImageSchema);
module.exports = heroImage;
