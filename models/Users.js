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
        type: INTEGER,
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: INTEGER,
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

const Users = mongoose.model('users', userSchema)
module.exports = Users