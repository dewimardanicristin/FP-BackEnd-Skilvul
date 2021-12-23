const historyModel = require('./../models/history.model')
// const userModel = require('./../models/user')

class historyController{
    static async getHistorybyIDUser(req,res){
        try {
            const id = req.params.id;
            const historyList = await historyModel.findOne({id_user: id})
            res.status(200).send(historyList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
    static async createOneHistory(req,res){
        try{
            const userModel = await historyModel.find().populate("id_user")
            if(userModel !== null){
                const body = req.body;
                const status = body.status;
                const tanggal = body.tanggal;
                const influencer = historyModel.find().populate("id_influencer")
                const history = new historyModel({status : status, tanggal : tanggal, influencer:influencer})
                const saved = await history.save()
                res.status(500).send(saved)
            }
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }
    static async updateHistory(req,res){
        try {
            const body = req.body;
            const status = body.status;
            const id = req.params.id;
            await historyModel.updateOne({_id : id},{status:status})
            res.status(200).send("Update Success");
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
}

module.exports = historyController