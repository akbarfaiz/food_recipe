const express = require('express')
const router = express.Router()
const {getUsers,getDetailUsers,postUsers,deleteUsers,updateUsers} = require('../controller/usersController')
const nameChecker = require('./../middleware/nameChecker')
const {protect} = require('./../middleware/authProtect')

router.get('/',getUsers)
router.get('/myProfile',protect,getDetailUsers)
// router.post('/',nameChecker,postUsers)
// router.delete('/delete/:id',deleteUsers)
router.put('/updateProfile',protect,updateUsers)

module.exports = router