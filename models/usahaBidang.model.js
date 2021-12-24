const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const UsahaSchema = new mongoose.Schema(
  {
    nama_bidangUsaha: {
      type: String,
    },
    nama_usaha: {
      type: String,
    },
    alamat_usaha: {
      type: String,
    },
    tahun_berdiri: {
      type: String,
    },
  },
  opt
);

const UsahaModel = mongoose.model("BidangUsaha", UsahaSchema);
module.exports = UsahaModel;
