const express = require('express')
const route = express.Router();

const{getAll, addOne, updateOne, deleteOne} = require('../controllers/BidangUsaha')

route.get('/', getAll)
route.put('/', updateOne)
route.delete('/;id', deleteOne)

module.exports = route