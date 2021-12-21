const express = require("express")
const insightData = require("../controllers/insightdata.controller")
const router = express.Router()

router.post("/",insightData.createNewInsight)
router.get("/",insightData.getAllInsight)
router.get("/:id",insightData.getInsightbyId)
router.put("/:id", insightData.updateInsight) 
router.delete("/:id",insightData.deleteInsight)

module.exports = router