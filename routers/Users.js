const express = require('express')
const route = express.Router();

const{getAll, addOne, updateOne, deleteOne} = require('../controllers/Users')

route.get('/', getAll)
route.post('/', addOne)
route.put('/', updateOne)
route.delete('/;id', deleteOne)

module.exports = route