const UserModel = null;
const InfluencerModel = null;
const jwt = require("jsonwebtoken");

class AdminController {
  // Admin Controller
  static async getAdmin(req, res) {
    try {
      res.status(200).send("hallo Admin");
    } catch (error) {}
  }
  static async loginAdmin(req, res) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const isAdmin = await UserModel.find({
        username: username,
        password: password,
      });
      // isAdmin ? res.status(200).send("admin login") : res.status(404).send({message: "OK", data: "not found"})
      if (isAdmin) {
        const accessToken = jwt.sign(
          { username: isAdmin.username, role: isAdmin.role },
          accessTokenSecret
        );
        res.json({
          accessToken,
        });
      } else {
        res.send("Username or password incorrect");
      }
    } catch (error) {
      res.status(500).send({ error: message.error });
    }
  }

  // Influencer Controller
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

      const newInfluencer = new InfluencerModel({
        name: name,
        imgCover: imgCover,
        imgProfile: imgProfile,
        followers: followers,
        category: category,
        location: location,
        insight: insight,
        tags: tags,
      });

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

      const listInfluencers = await InfluencerModel.findOne({ _id: id });
      res.status(200).send(listInfluencers);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
  static async updateInfluencer(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const updateInfluencer = await InfluencerModel.updateOne(
        { id: id },
        body
      );
      res.status(200).send({ message: "ok", updateInfluencer });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
  static async deleteInfluencer(req, res) {
    try {
      const id = req.params.id;
      const idDeleted = await InfluencerModel.findOne({ id: id });
      await InfluencerModel.deleteOne({ id: id });
      res.status(200).send({ message: "deleted", idDeleted });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  // User Controller
  static async regisUser(req, res) {
    try {
      const body = req.body;

      const nik = body.nik;
      const name = body.name;
      const email = body.email;
      const no_hp = body.no_hp;
      const no_wa = body.no_wa;
      const password = body.password;
      const role = body.role;

      const newUser = new UserModel({
        name: name,
        nik: nik,
        email: email,
        no_hp: no_hp,
        no_wa: no_wa,
        password: password,
        role: role,
      });

      const saved = await newUser.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getUsers(req, res) {
    try {
      const listUser = UserModel.find();
      res.status(200).send(listUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getUserByID(req, res) {
    try {
      const id = req.params.id;

      const listUser = await UserModel.findOne({ _id: id });
      res.status(200).send(listUser);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const updateUser = await UserModel.updateOne({ id: id }, body);
      res.status(200).send({ message: "ok", updateUser });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
  static async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const idDeleted = await UserModel.findOne({ id: id });
      await UserModel.deleteOne({ id: id });
      res.status(200).send({ message: "deleted", idDeleted });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = AdminController;
