const express = require("express")
const history = require("../controllers/history.controller")
const router = express.Router()

router.post("/",history.createOneHistory)
router.get("/:id",history.getHistorybyIDUser)
router.put("/:id", history.updateHistory) 

module.exports = router