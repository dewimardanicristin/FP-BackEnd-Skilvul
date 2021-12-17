const express = require("express");
const influencer = express.Router();

const UserController = require("../../controllers/admin.controller")

influencer.get('/', UserController.getInfluencers )

influencer.get('/:id', UserController.getInfluencerByID)

influencer.post('/', UserController.regisInfluencer)

influencer.patch('/', UserController.updateInfluencer)

influencer.delete('/:id', UserController.deleteInfluencer)

module.exports = influencer