const express = require('express')
const route = express.Router();

const{getAll, addOne, updateOne, deleteOne} = require('../controllers/user')

route.get('/users', getAll)
route.post('/users', addOne)
route.put('/users', updateOne)
route.delete('/users;id', deleteOne)

module.exports = route

