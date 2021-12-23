const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const influencerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    imgProfile: {
      type: String,
    },
    imgCover: {
      type: String,
    },
    followers: {
      type: String,
    },
    category: {
      type: String,
    },
    location: {
      type: String,
    },
    insights: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsightData",
    },
    tags: [],
  },
  opt
);

const InfluencerModel = mongoose.model("Influencer", influencerSchema);
module.exports = InfluencerModel;
