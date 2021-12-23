const Users = require('../models/users')
const bidangUsaha = require('../models/bidangUsaha')

module.exports = {
    getAll: (req,res) => {
        users.findAll({
            raw: true,
        })
        .then(result => {
            res.send({message: "SUCCESS, result"})
        }).catch(error => res.send (error))
},

addOne : (req,res) => {
    const{nama, email, password, nama_usaha} = req.body
    Users.create({nama, email, password}, 
        (error, result) => {
            if(error){
                res.status(400).json({
                    message: "NOT FOUND"
                })
            } else {
                res.status(200).json({
                    message: "SUCCESS",
                })
            }

        })
},

updateOne : async (req,res) => {
    const {nama, nik, email, phoneNumber, wa, password} = req.body
    const user = await Users.updateOne(
        {_id: req.params.id},
        {nama, nik, email, phoneNumber, wa, password, id_bidangUsaha}, {new: true}
    );
    if(user) {
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
    const user = await Users.deleteOne(
        {_id: req.params.id}, {new: true}
    );
    if(user) {
        res.send({
            message: "SUCCESS", user
        })
    } else {
        res.send({message: "ERROR"})
    }
}
}

