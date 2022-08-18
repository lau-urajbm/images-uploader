const { Router } = require('express');

const {postImage, getAllImages} = require('../controllers/upload')
const router = Router()

router.post('/', postImage)
router.get('/', getAllImages)

module.exports=router