const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const userSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
    },
    nik: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    bidangUsaha: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BidangUsaha",
    },
    wa: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  opt
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
