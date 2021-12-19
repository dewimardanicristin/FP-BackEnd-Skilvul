const express = require("express");
const user = express.Router();

const UserController = require("../../controllers/admin.controller")

const authenticateJWT = require("../../middlewares/authenticate")

user.get('/', authenticateJWT, UserController.getUsers )

user.get('/:id', authenticateJWT, UserController.getUserByID)

user.post('/', authenticateJWT, UserController.regisUser)

user.patch('/', authenticateJWT, UserController.updateUser)

user.delete('/:id', authenticateJWT, UserController.deleteUser)

module.exports = user