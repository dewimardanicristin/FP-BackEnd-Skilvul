const UserModel = null;
const InfluencerModel = null;

class AdminController {
  static async regisInfluencer(req, res) {
    try {
      const body = req.body;

      const name = body.name;
      const imgCover = body.imgCover;
      const imgProfile = body.imgProfile;
      const followers = body.followers;
      const category = body.category;
      const location = body.location;
      const insight = body.insight;
      const tags = body.tags;

      const newInfluencer = new {
        name: name,
        imgCover: imgCover,
        imgProfile: imgProfile,
        followers: followers,
        category: category,
        location: location,
        insight: insight,
        tags: tags,
      }();

      const saved = await newInfluencer.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getInfluencers(req, res) {
    try {
      const listInfluencers = InfluencerModel.find();
      res.status(200).send(listInfluencers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getInfluencerByID(req, res) {
    try {
        const id = req.params.id;

        const listInfluencers = await InfluencerModel.findOne({_id: id})
        res.status(200).send(listInfluencers);
    } catch (error) {
        res.status(404).send(error.message);
    }
  }
  static async updateInfluencer(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        const updateInfluencer = await InfluencerModel.updateOne({id: id}, body)
        res.status(200).send({message: "ok", updateInfluencer});

    } catch (error) {
        res.status(500).send({err: error})
    }
  }
  static async deleteInfluencer(req, res){
      try {
        const id = req.params.id;
        const idDeleted = await InfluencerModel.findOne({id: id})
        await InfluencerModel.deleteOne({id: id})
        res.status(200).send({message: "deleted", idDeleted});
      } catch (error) {
        res.status(500).send({err: error})
      }
  }

  static async regisUser(req, res) {
    try {
      const body = req.body;

      const name = body.name;
      const imgCover = body.imgCover;
      const imgProfile = body.imgProfile;
      const followers = body.followers;
      const category = body.category;
      const location = body.location;
      const insight = body.insight;
      const tags = body.tags;

      const newInfluencer = new {
        name: name,
        imgCover: imgCover,
        imgProfile: imgProfile,
        followers: followers,
        category: category,
        location: location,
        insight: insight,
        tags: tags,
      }();

      const saved = await newInfluencer.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getUsers(req, res) {
    try {
      const listInfluencers = InfluencerModel.find();
      res.status(200).send(listInfluencers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getUserByID(req, res) {
    try {
        const id = req.params.id;

        const listInfluencers = await InfluencerModel.findOne({_id: id})
        res.status(200).send(listInfluencers);
    } catch (error) {
        res.status(404).send(error.message);
    }
  }
  static async updateUser(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        const updateInfluencer = await InfluencerModel.updateOne({id: id}, body)
        res.status(200).send({message: "ok", updateInfluencer});

    } catch (error) {
        res.status(500).send({err: error})
    }
  }
  static async deleteUser(req, res){
      try {
        const id = req.params.id;
        const idDeleted = await InfluencerModel.findOne({id: id})
        await InfluencerModel.deleteOne({id: id})
        res.status(200).send({message: "deleted", idDeleted});
      } catch (error) {
        res.status(500).send({err: error})
      }
  }
}
