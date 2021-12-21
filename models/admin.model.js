const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    }
  },
  opt
);

const AdminModel = mongoose.model("Admin", adminSchema);
module.exports = AdminModel;