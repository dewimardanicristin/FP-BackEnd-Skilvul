const express = require("express");
const router = express.Router();

const authenticateJWT = require("../../middlewares/authenticate")

const adminController = require("../../controllers/admin.controller")

const influencerRoute = require('./influencer')
const loginRoute = require('./loginAdmin')
const userRoute = require('./user')


router.get('/', authenticateJWT , adminController.getAdmin)

router.use("/login", loginRoute)
router.use("/influencer", influencerRoute)
router.use("/user", userRoute)

module.exports = router