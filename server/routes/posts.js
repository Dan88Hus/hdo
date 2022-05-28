const express = require('express')
const router = express.Router()
const Posts = require('../controllers/posts')

/* rest end point are indicated in here, /api need to be used as server/index.js file line 65 add '/api' before path as prefix
router takes 2 parameter first is end point and another is function to be triggered so controllers will be triggered as functions
"post method is used for security reason and also we send API keys and form details(name, lastname, telephone, email, comment)"
*/
router.post('/images', Posts.images)
router.post('/sendmail', Posts.sendMail)

module.exports = router