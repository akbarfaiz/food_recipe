const express = require('express')
const router = express.Router()
const {registerUser,loginUser,otp} = require('./../controller/authController')

router.post('/register',registerUser)
router.get('/login',loginUser)
router.get('/otp/:id/:code',otp)

module.exports = router