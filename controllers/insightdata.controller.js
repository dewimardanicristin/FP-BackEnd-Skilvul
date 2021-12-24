const InsightModel = require('../models/insightdata.model')

class InsightDataController{
    //use static to auto access in artis route so dont make a instance in artis routes
    static async createNewInsight(req,res){
        try {
            const body = req.body;
            const facebook = body.facebook;
            const instagram = body.instagram;
            const twitter = body.twitter;
            const insightData = new InsightModel({facebook : facebook, instagram : instagram, twitter : twitter})
            const saved = await insightData.save()
            res.status(500).send(saved)
        } catch (error) {
            res.status(500).send({msg:error})
        }
    }
    static async getAllInsight(req,res){
        try {
            const insightList = await InsightModel.find()
            res.status(200).send(insightList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
    static async getInsightbyId(req,res){
        try {
            const id = req.params.id;

            const insightList = await InsightModel.findOne({_id: id})
            res.status(200).send(insightList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }


    static async updateInsight(req,res){
        try {
            const body = req.body;
            const facebook = body.facebook;
            const twitter = body.twitter;
            const instagram = body.instagram;
            const id = req.params.id;

            await InsightModel.updateMany({_id : id},{facebook : facebook,twitter : twitter,instagram : instagram})
            res.status(200).send("Update Success");
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
    static async deleteInsight(req,res){
        try {
            const id = req.params.id;

            await InsightModel.deleteOne({_id:id})
            res.status(200).send({message:`${id} has been delete`})
        } catch (error) {
            
        }
    }
}

module.exports = InsightDataController