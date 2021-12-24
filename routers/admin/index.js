const express = require("express");
const router = express.Router();

const authenticateJWT = require("../../middlewares/authenticate")

const adminController = require("../../controllers/admin.controller")

const influencerRoute = require('./influencer')
const loginRoute = require('./loginAdmin')

// router.get('/', authenticateJWT, UserController.getAdmin )
// router.post('/', UserController.loginAdmin)

router.get('/', authenticateJWT , adminController.getAdmin)

router.use("/influencer", influencerRoute)
router.use("/admin-login", loginRoute)
// router.use("/user", userRoute)

module.exports = router