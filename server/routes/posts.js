const express = require('express')
const router = express.Router()
const Posts = require('../controllers/posts')

//api
router.post('/images', Posts.images)
// router.post('/sendmail', Posts.sendMail)

module.exports = router