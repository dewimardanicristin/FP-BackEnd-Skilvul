const express = require('express')
const router = express.Router();

const{getAll, addOne, updateOne, deleteOne} = require('../controllers/user')

router.get('/', getAll)
router.post('/', addOne)
router.put('/', updateOne)
router.delete('/:id', deleteOne)


module.exports = router