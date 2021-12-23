const express = require("express");
const influencer = express.Router();

const AdminController = require("../../controllers/admin.controller")
const InfluencerController = require("../../controllers/influencer.controller")

const authenticateJWT = require("../../middlewares/authenticate")

influencer.get('/', authenticateJWT, InfluencerController.getInfluencer )

influencer.get('/:id', authenticateJWT, InfluencerController.getInfluencerByID)

influencer.post('/', authenticateJWT, AdminController.regisInfluencer)

influencer.patch('/:id', authenticateJWT, AdminController.updateInfluencer)

influencer.delete('/:id', authenticateJWT, AdminController.deleteInfluencer)

module.exports = influencer