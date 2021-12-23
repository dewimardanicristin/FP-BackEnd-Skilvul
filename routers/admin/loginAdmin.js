const express = require("express");
const router = express.Router();

const LoginController = require("../../controllers/admin.controller")

router.get("/", LoginController.getLoginAdmin)
router.post("/", LoginController.loginAdmin)
module.exports = router