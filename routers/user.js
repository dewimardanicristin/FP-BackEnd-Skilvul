const express = require('express')
const router = express.Router();

const{getAll, addOne, updateOne, deleteOne, getUser} = require('../controllers/user')

router.get('/', getUser)
router.post('/', addOne)
router.put('/', updateOne)
router.delete('/:id', deleteOne)


module.exports = router