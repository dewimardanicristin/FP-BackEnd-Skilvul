const historyModel = require('./../models/history.model')
const UserModel = require('./../models/user.model')

class historyController{
    static async getHistorybyIDUser(req,res){
        try {
            const id = req.params.id;
            const historyList = await historyModel.find({id_user: id})
            res.status(200).send(historyList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
    static async createOneHistory(req,res){
        const id = req.params.id;
        try{
            if(id){
                const body = req.body;
                const tanggal = Date.now();
                await historyModel.create({id_user:id, status : "Menunggu", tanggal : tanggal, id_influencer:body.id_influencer,alasan_pengajuan:body.alasan_pengajuan})
                .then((result) => {
                    res.status(200).send({
                        message: "success",
                        result,
                    });
                })
                .catch((error) => {
                    console.log(error);
                    res.status(400).send({
                        message: "error",
                        error,
                    });
                });

            }
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }
    static async updateHistory(req,res){
        try {
            const body = req.body;
            await historyModel.findOneAndUpdate({_id: body._id},{status: body.status})
            .then((result) => {
                res.status(200).send({
                    message: "success",
                    result,
                });
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send({
                    message: "error",
                    error,
                });
            });
    
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
}

module.exports = historyController