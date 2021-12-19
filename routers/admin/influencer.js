const express = require("express");
const influencer = express.Router();

const UserController = require("../../controllers/admin.controller")

const authenticateJWT = require("../../middlewares/authenticate")

influencer.get('/', authenticateJWT, UserController.getInfluencers )

influencer.get('/:id', authenticateJWT, UserController.getInfluencerByID)

influencer.post('/', authenticateJWT, UserController.regisInfluencer)

influencer.patch('/', authenticateJWT, UserController.updateInfluencer)

influencer.delete('/:id', authenticateJWT, UserController.deleteInfluencer)

module.exports = influencer