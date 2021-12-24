const userModel = require("../models/user");
const UserModel = require("../models/user.model")
const usahaBidangModel = require("../models/usahaBidang.model")

module.exports = {
  getAll: (req, res) => {
    user
      .find({
        raw: true,
      })
      .then((result) => {
        res.send({ message: "SUCCESS", result });
      })
      .catch((error) => res.send(error));
  },

  getUser: (req, res) => {
    user
      .findOne({
        id: req.user.id,
      })
      .then((result) => {
        res.send({ message: "SUCCESS", result });
      })
      .catch((error) => res.send(error));
  },

  addOne: async (req, res) => {
    try {
      const body = req.body;

      const newUsaha = new usahaBidangModel({
        nama_bidangUsaha: body.nama_bidangUsaha,
        nama_usaha: body.nama_usaha,
        alamat_usaha: body.alamat_usaha,
        tahun_berdiri: body.tahun_berdiri,
      });

      const usahaSaved = await newUsaha.save();

      console.log(usahaSaved._id)

      const idUsaha = usahaSaved._id.toString()

      const newUser = new UserModel({
        nama: body.nama,
        email: body.email,
        password: body.password,
        nik: body.nik,
        phoneNumber: body.phoneNumber,
        wa: body.wa,
        bidangUsaha: idUsaha,
      });

      const saved = await newUser.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send(error.message);
    }
    // const{ nama_usaha, alamat_usaha, tahun_berdiri } = req.body
    // const{nama, email, password, nik, phoneNumber, wa} = req.body;
    // if(nama === null && email === null && password === null && nik === null && email === null && phoneNumber === null && wa === null && password === null ) {
    //     res.status(400).json({message : "Data tidak boleh kosong"})
    // }else{
    //     user.create({
    //         nama: nama,
    //         email: email,
    //         password: password
    //     })
    //     .then((result)=> {
    //         res.status(200).send({message: "Registrasi Sukses", result})
    //     })
    //     .catch(error => res.send(error))
    // }
  },

  updateOne: async (req, res) => {
    const { nama, nik, email, phoneNumber, wa, password } = req.body;
    const users = await user.updateOne(
      { _id: req.params.id },
      { nama, nik, email, phoneNumber, wa, password, id_bidangUsaha },
      { new: true }
    );
    if (users) {
      res.send({
        message: "SUCCESS",
        user,
      });
    } else {
      res.send({
        message: "ERROR",
      });
    }
  },

  deleteOne: async (req, res) => {
    const users = await user.deleteOne({ _id: req.params.id }, { new: true });
    if (users) {
      res.send({
        message: "SUCCESS",
        user,
      });
    } else {
      res.send({ message: "ERROR" });
    }
  },
};
