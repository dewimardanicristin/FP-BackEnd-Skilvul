const BidangUsaha = require('../models/bidangUsaha')

module.exports = {
    getAll: (req,res) => {
        BidangUsaha.findAll({
            raw: true,
        })
        .then(result => {
            res.send({message: "SUCCESS, result"})
        }).catch(error => res.send (error))
},

updateOne : async (req,res) => {
    const {nama_bidangUsaha, namaUsaha, alamatUsaha, tahunBerdiri} = req.body
    const bidangUsaha = await BidangUsaha.updateOne(
        {_id: req.params.id},
        {nama_bidangUsaha, namaUsaha, alamatUsaha, tahunBerdiri}, {new: true}
    );
    if(bidangUsaha) {
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
    const bidangUsaha = await BidangUsaha.deleteOne(
        {_id: req.params.id}, {new: true}
    );
    if(bidangUsaha) {
        res.send({
            message: "SUCCESS", user
        })
    } else {
        res.send({message: "ERROR"})
    }
}
}
