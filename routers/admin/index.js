const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/admin.controller")

const influencerRoute = require('./influencer')
const userRoute = require('./user')

router.get('/', UserController.getAdmin )

router.post('/', UserController.loginAdmin)

router.use("/influencer", influencerRoute)
router.use("/user", userRoute)

module.exports = router