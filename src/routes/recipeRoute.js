const express = require('express')
const router = express.Router()
const {getRecipe,getDetailRecipe,postRecipe,deleteRecipe,updateRecipe} = require('../controller/recipeController')
const nameChecker = require('./../middleware/nameChecker')
const updateRecipeChecker = require('./../middleware/updateRecipeChecker')
const {protect} = require('./../middleware/authProtect')
const upload = require('../middleware/uploadPhoto')

router.get('/myRecipe',protect,getDetailRecipe)
router.get('/',getRecipe)
router.post('/',protect,upload.single('photo'),postRecipe)
router.delete('/delete/:id',protect,deleteRecipe)
router.put('/update/:id',protect,upload.single('photo'),updateRecipeChecker,updateRecipe)

module.exports = router