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
    },
    influencers: [{ type: Schema.Types.ObjectId, ref: "Influencer" }],
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  opt
);

const AdminModel = mongoose.model("Admin", adminSchema);
module.exports = adminSchema;
