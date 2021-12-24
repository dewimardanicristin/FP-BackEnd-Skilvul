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
      ref: "bidangUsaha",
    },
    id_history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "history",
      },
    ],
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

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;
