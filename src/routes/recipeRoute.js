const express = require('express')
const router = express.Router()
const {getRecipe,getDetailRecipe,postRecipe,deleteRecipe,updateRecipe} = require('../controller/recipeController')
const nameChecker = require('./../middleware/nameChecker')
const updateRecipeChecker = require('./../middleware/updateRecipeChecker')

router.get('/',getRecipe)
router.get('/:id',getDetailRecipe)
router.post('/',nameChecker,postRecipe)
router.delete('/delete/:id',deleteRecipe)
router.put('/:id',updateRecipeChecker,updateRecipe)

module.exports = router