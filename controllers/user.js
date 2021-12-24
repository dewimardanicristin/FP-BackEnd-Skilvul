const user = require('../models/user')
const bidangUsaha = require('../models/bidangUsaha')

module.exports = {
    getAll: (req,res) => {
        user.find({
            raw: true,
        })
        .then(result => {
            res.send({message: "SUCCESS", result})
        })
        .catch(error => res.send(error))
    },

    getUser: (req,res) => {
        user.findOne({
            id: req.user.id,
        })
        .then(result => {
            res.send({message: "SUCCESS", result})
        })
        .catch(error => res.send(error))
    },

    addOne : (req,res) => {
        const{nama, email, password} = req.body;
        if(nama === null && email === null && password === null) {
            res.status(400).json({message : "Data tidak boleh kosong"})
        }else{
            user.create({
                nama: nama,
                email: email, 
                password: password
            })
            .then((result)=> {
                res.status(200).send({message: "Registrasi Sukses", result})
            })
            .catch(error => res.send(error))
        }
    },

updateOne : async (req,res) => {
    const {nama, nik, email, phoneNumber, wa, password} = req.body
    const users = await user.updateOne(
        {_id: req.params.id},
        {nama, nik, email, phoneNumber, wa, password, id_bidangUsaha}, {new: true}
    );
    if(users) {
        res.send({
            message: "SUCCESS", user
        })
    } else {
        res.send({
            message: "ERROR"
        })
    }
},

deleteOne : async (req,res) => {
    const users = await user.deleteOne(
        {_id: req.params.id}, {new: true}
    );
    if(users) {
        res.send({
            message: "SUCCESS", user
        })
    } else {
        res.send({message: "ERROR"})
    }
}}


