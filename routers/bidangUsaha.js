const express = require('express')
const route = express.Router();

const{getAll, addOne, updateOne, deleteOne} = require('../controllers/bidangUsaha')

route.get('/bidangUsaha', getAll)
route.post('/bidangUsaha', addOne)
route.put('/bidangUsaha', updateOne)
route.delete('/bidangUsaha;id', deleteOne)

module.exports = route