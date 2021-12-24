const InfluencerModel = require("../models/influencer.model");

class InfluencerController {
  static async getInfluencer(req, res) {
    try {
      const listInfluencers = await InfluencerModel.find().populate("insights");
      res.status(200).send({message: "OK", data: listInfluencers});
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getInfluencerByID(req, res) {
    try {
      const influencer = await findOne({ _id: req.params.id }).populate("insights");
      res.status(200).send(influencer);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
module.exports = InfluencerController;
