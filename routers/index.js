const express = require("express")
const router = express.Router()

// this routes just for testing guys
router.get("/ping",(req,res) => {
    const ready = {
        status:"server is ready"
    }
    res.status(200).send(ready)
})

module.exports = router