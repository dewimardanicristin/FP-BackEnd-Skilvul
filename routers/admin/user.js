const express = require("express");
const user = express.Router();

const UserController = require("../../controllers/admin.controller")

user.get('/', UserController.getUsers )

user.get('/:id', UserController.getUserByID)

user.post('/', UserController.regisUser)

user.patch('/', UserController.updateUser)

user.delete('/:id', UserController.deleteUser)

module.exports = user