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
      required: true,
      unique: true
    },
    verified: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    IdNumber: {
      type: String,
      required: true
    },
    vehicleNo: {
      type: Number,
      required: true
    },
    free: {
      type: Boolean,
      default: true
    },
    clients: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User"
      }
    ]
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
