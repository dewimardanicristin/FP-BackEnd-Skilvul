const express = require("express");
const router = express.Router();

const LoginController = require("../../controllers/admin.controller")

const authmiddleware = require("../../middlewares/authenticate")

router.get("/", LoginController.getLoginAdmin)
router.post("/", LoginController.loginAdmin)
module.exports = router