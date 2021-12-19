const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/admin.controller")

const authenticateJWT = require("../../middlewares/authenticate")

const influencerRoute = require('./influencer')
const userRoute = require('./user')

router.get('/', authenticateJWT, UserController.getAdmin )

router.post('/', authenticateJWT, UserController.loginAdmin)

router.use("/influencer", influencerRoute)
router.use("/user", userRoute)

module.exports = router