const mongoose = require('mongoose');

const opts = {
    timestamps : true,
    versionKey: false
}
const historySchema = new mongoose.Schema({
        status : {
            type: String
        },
        id_user : { 
            type : mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        tanggal :{
            type:Date,
        },
        id_influencer : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "Influencer"
        },
        alasan_pengajuan : {
            type : String,
            required : true
        }
},opts)

const historyModel = mongoose.model("History",historySchema)
module.exports = historyModel
