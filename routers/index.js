const express = require("express")
const router = express.Router()

const insightDataRoutes = require('./insightData')
const historyRoutes = require('./history')
const searchInfluence = require('./influencer')
const admin = require('./admin')
const user = require('./user')
const bidangUsaha = require('./bidangUsaha')
// this routes just for testing guys
router.get("/ping",(req,res) => {
    const ready = {
        status:"server is ready"
    }
    res.status(200).send(ready)
})
router.use("/insightData",insightDataRoutes)
router.use("/history",historyRoutes)
router.use("/admin",admin)
router.use("/search-influence", searchInfluence)
router.use("/user",user)
router.use("/bidangUsaha", bidangUsaha)

module.exports = router