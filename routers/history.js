const express = require("express")
const history = require("../controllers/history.controller")
const router = express.Router()

// router.post("/:id",history.createOneHistory)
router.get("/:id",history.getHistorybyIDUser)
router.put("/", history.updateHistory) 

module.exports = router