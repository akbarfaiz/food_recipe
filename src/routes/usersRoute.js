const express = require('express')
const router = express.Router()
const {getUsers,getDetailUsers,postUsers,deleteUsers,updateUsers} = require('../controller/usersController')
const nameChecker = require('./../middleware/nameChecker')

router.get('/',getUsers)
router.get('/:id',getDetailUsers)
router.post('/',nameChecker,postUsers)
router.delete('/delete/:id',deleteUsers)
router.put('/:id',nameChecker,updateUsers)

module.exports = router