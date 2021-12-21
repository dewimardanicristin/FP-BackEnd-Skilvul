const mongoose = require('mongoose');

const opts = {
    timestamps : true,
}
const insightDataSchema = new mongoose.Schema({
        facebook : [{
            type: String
        }],
        instagram :[{
            type: String
        }],
        twitter :[{
            type:String,
        }]
},opts)

const insightdataModel = mongoose.model("InsightData",insightDataSchema)
module.exports = insightdataModel
