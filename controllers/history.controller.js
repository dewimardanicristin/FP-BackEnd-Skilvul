const historyModel = require("./../models/history.model");
const UserModel = require("./../models/user.model");

class historyController {
  static async getAllHistory(req, res) {
    try {
      const histories = await historyModel.find();
      res.status(200).send(histories);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
  static async getHistorybyIDUser(req, res) {
    try {
      const id = req.params.id;
      console.log(id)
      const historyList = await historyModel.find({ id_user: id });
      res.status(200).send(historyList);
    } catch (error) {
      res.status(500).send({ err: error.message });
    }
  }
  static async createOneHistory(req, res) {
    const id = req.params.id;
    const idUser = req.user.id
    console.log(idUser)
    try {
      if (id) {
        const body = req.body;
        const tanggal = Date.now();
        await historyModel
          .create({
            id_user: req.user.id,
            status: "Menunggu",
            tanggal: tanggal,
            id_influencer: id,
            alasan_pengajuan: body.alasan_pengajuan,
          })
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
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async updateHistory(req, res) {
    try {
      const body = req.body;
      await historyModel
        .findOneAndUpdate({ _id: body._id }, { status: body.status })
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
      res.status(500).send({ err: error });
    }
  }
}

module.exports = historyController;
