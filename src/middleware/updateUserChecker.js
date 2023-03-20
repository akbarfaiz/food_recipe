const {selectUsersById} = require('../models/usersModel')
const cloudinary = require("../config/cloudinary")

const updateUserChecker = async (req,res,next) => {
    let id = req.params.id
    let name = req.body.name
    let email = req.body.email
    let photo = req.file
    let oldData = await selectUsersById(id)

    if(!name){
        req.body.name = oldData.rows[0].name
    }

    if(!email){
        req.body.email = oldData.rows[0].email
    }
    
    if(!photo){
        req.body.photo = oldData.rows[0].photo
    } else {
        const imageUrl = await cloudinary.uploader.upload(req.file.path,{folder:'profile'})
        req.body.photo = imageUrl.secure_url
    }
    
    next()
}

module.exports = updateUserChecker