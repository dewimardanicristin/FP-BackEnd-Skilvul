const bidangUsaha = require('../models/bidangUsaha')

module.exports = {
    getAll: (req,res) => {
        bidangUsaha.findAll({
            raw: true,
        })
        .then(result => {
            res.send({message: "SUCCESS, result"})
        }).catch(error => res.send (error))
},

updateOne : async (req,res) => {
    const {nama_bidangUsaha, namaUsaha, alamatUsaha, tahunBerdiri} = req.body
    const Bidangusaha = await bidangUsaha.updateOne(
        {_id: req.params.id},
        {nama_bidangUsaha, namaUsaha, alamatUsaha, tahunBerdiri}, {new: true}
    );
    if(Bidangusaha) {
        res.send({
            message: "SUCCESS", bidangUsaha
        })
    } else {
        res.send({
            message: "ERROR"
        })
    }
},

deleteOne : async (req,res) => {
    const Bidangusaha = await bidangUsaha.deleteOne(
        {_id: req.params.id}, {new: true}
    );
    if(Bidangusaha) {
        res.send({
            message: "SUCCESS", user
        })
    } else {
        res.send({message: "ERROR"})
    }
}
}
