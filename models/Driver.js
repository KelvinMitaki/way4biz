const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema(
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
      required: true
    },
    password: {
      type: String,
      required: true
    },
    imageUrl: {
      type: [String]
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      }
    }
  }
);

const Driver = mongoose.model("Driver", DriverSchema);

module.exports = Driver;
