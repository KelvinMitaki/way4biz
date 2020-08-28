const mongoose = require("mongoose");

const HeroPhotoSchema = new mongoose.Schema(
  {
    photoUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const HeroPhoto = mongoose.model("HeroPhoto", HeroPhotoSchema);
module.exports = HeroPhoto;
