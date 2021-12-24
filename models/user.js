const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id_user: {
        type: String,
        unique: true,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    nik: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
    },
    id_bidangUsaha: [{
            type: Schema.Types.ObjectID,
            ref: "bidangUsaha"
        }],
    id_history:[{
        type: Schema.Types.ObjectID,
        ref: "history"
    }],
    wa: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    }, {
        timestamps: true
    })

    
const user = mongoose.model('users', userSchema)
module.exports = user