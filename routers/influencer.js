const express = require("express");
const router = express.Router();

const InfluencerController = require("../controllers/influencer.controller")

router.get("/", InfluencerController.getInfluencer)
router.get("/:id", InfluencerController.getInfluencerByID)

module.exports = router