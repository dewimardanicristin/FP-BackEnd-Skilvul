const mongoose = require("mongoose");

const opt = {
    timestamps: true,
    versionKey: false,
  };

const userSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    nik: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    id_bidangUsaha: {
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

const user = mongoose.model("users", userSchema);
module.exports = user;
