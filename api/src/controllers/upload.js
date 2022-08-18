const axios = require('axios')
const {Image} = require('../db')
const cloudinary = require('cloudinary').v2

async function postImage(req,res){
    const {imageurl} = req.body
    
    try{
          const response = await cloudinary.uploader.upload(imageurl, 
            {
            folder:'Api-images'
        }) 
        console.log(response.secure_url)
         let newImage = await Image.create({
            name:JSON.stringify(response.secure_url)
        }) 
        
        res.send(response)
            
}catch(err){
    console.log(err)
}
}

async function getAllImages(req, res){
    const allImages = await Image.findAll({
        attributes :['name']
    
    })
    console.log(allImages)
    res.send(allImages)
    
}

module.exports={
    postImage,
    getAllImages
}