const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')
const contentController = require('../controller/contentController')


router.post('/register', userController.signUp)
router.post('/signin', userController.signInUser)
router.get('/alluser', userController.getAllUser)
router.get('/singleuser/:id', userController.getSingleUser)
router.put('/profile/:id', userController.updateProfile)


router.post('/post', contentController.createContent)
router.get('/allcontent', contentController.getAllPost)
router.get('/singlepost/:id', contentController.getSinglePost)
router.put('/updatepost/:id', contentController.updateSinglePost)
router.delete('/deletepost/:id', contentController.deletePost)
module.exports = router;
