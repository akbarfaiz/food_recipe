const {selectRecipe,insertRecipe,selectRecipeById,deleteRecipeById,updateRecipe} = require('../models/recipeModel')

const recipeController = {
    getDetailRecipe: async (req,res,next)=>{
        try {
            let id = req.params.id
            let data = await selectRecipeById(id)
        
            if(data.rows[0]){
                res.status(200).json({status:200,message:`data recipe found`,data:data.rows})
            } else {
                res.status(400).json({status:400,message:`data recipe not found`})
            }   
        } catch (error) {
            next(error)
        }
    },
    getRecipe: async (req,res,next)=>{
        try {
            let {search,sortby,sort,page,limit} = req.query
            let data = {
                search: search || '',
                sortby: sortby || 'created_at',
                sort: sort || 'ASC',
                page: page,
                limit: limit
            }
    
            let showUser = await selectRecipe(data)
            if(!showUser.rows[0]){
                res.status(400).json({status:400,message:`data recipe not found`})
            } else {
                res.status(200).json({status:200,message:`data found`,data:showUser.rows})
            }   
        } catch (error) {
            next(error)
        }
    },
    postRecipe: async (req,res,next)=>{
        try {
            let {name,ingredient,photo,users_id,category_id} = req.body
            let data = {name,ingredient,photo,users_id,category_id}
            let dataCheck = {
                search: name,
                sortby: 'created_at',
                sort: 'ASC'
            }
            let input = null
    
            input = await insertRecipe(data)
    
            let checkData = await selectRecipe(dataCheck)
    
            if(!checkData.rows[0]){
                res.status(404).json({status:404,message:`data input failed`})
            } else {
                res.status(200).json({status:200,message:`data input successfully`,data:checkData.rows})
            }   
        } catch (error) {
            next(error)
        }
    },
    deleteRecipe: async (req,res,next)=>{
        try {
            let id = req.params.id
            let dlt = null
    
            let checkData = await selectRecipeById(id)
            if (!checkData.rows[0]) {
                res.status(404).json({status:404,message:`id invalid`})
            } else {
                dlt = await deleteRecipeById(id)
                checkData = await selectRecipeById(id)
                res.status(200).json({status:200,message:`data delete successfully`,data:checkData.rows})
            }
        } catch (error) {
            next(error)
        }
    },
    updateRecipe: async (req,res,next)=>{
        try {
            let id = req.params.id
            let name = req.body.name
            let ingredient = req.body.ingredient
            let photo = req.body.photo
            let users_id = req.body.users_id
            let category_id = req.body.category_id
            let data = {name,ingredient,photo,users_id,category_id}
    
            let checkData = await selectRecipeById(id)
    
            if (!checkData.rows[0]) {
                res.status(404).json({status:404,message:`id invalid`})
            } else {
                await updateRecipe(id,data)
                let newData = await selectRecipeById(id)
                res.status(200).json({status:200,message:`update data successfully`,data:newData.rows})
            }   
        } catch (error) {
            next(error)
        }
    }
}

module.exports = recipeController