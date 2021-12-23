const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bidangUsahaSchema = new Schema({
    id_bidangUsaha : {
        type: String,
        unique: true,
        required: true
    },
    nama_bidangUsaha : {
        type: String,
        require: true
    },
    nama_usaha : {
        type: String,
        require: true
    },
    alamat_usaha : {
        type: String,
        require: true
    },
    tahun_berdiri : {
        type: int,
        require: true
    }
})

const BidangUsaha = mongoose.model('bidangUsaha', bidangUsahaSchema)
module.exports = BidangUsaha
