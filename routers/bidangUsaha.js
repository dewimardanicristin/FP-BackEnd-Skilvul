const express = require('express')
const router = express.Router();

const{getAll, addOne, updateOne, deleteOne} = require('../controllers/bidangUsaha')

router.get('/', getAll)
router.put('/', updateOne)
router.delete('/:id', deleteOne)

module.exports = router