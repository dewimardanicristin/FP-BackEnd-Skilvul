const Users = require('../models/Users')
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

class UsersController {
static async regisUsers(req, res) {
    try {
        // const{nama_usaha, alamat_usaha, tahun_berdiri} = req.body
        const createbidangUsaha = function (nama_usaha, alamat_usaha, tahun_berdiri){
        const newbidangUsaha = new bidangUsahaModel({
            nama_usaha: nama_usaha,
            alamat_usaha: alamat_usaha,
            tahun_berdiri: tahun_berdiri
        })
        const saved = await newbidangUsaha.save();
    };

    //   const{nama, nik, email, phoneNumber, password, wa} = req.body
    const createUser = function (nama, nik, email, phoneNumber, password, wa){
      const newUsers = new UsersModel({
        nama: nama,
        nik: nik,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        wa: wa
      });
      const saved = await newUsers.save();
    };

      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}