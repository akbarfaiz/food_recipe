const express = require('express')
const router = express.Router()
const Users =   require('./usersRoute')
const Category =   require('./categoryRoute')
const Recipe =   require('./recipeRoute')

router.use('/users',Users)
router.use('/category',Category)
router.use('/recipe',Recipe)
router.get('/',function(req, res) {
    res.json({ message: 'Welcome to Food Recipe API !!!' });   
})

module.exports = router