var express = require('express');
var router = express.Router();

const ctrlPosts = require('../controllers/posts');

router.get("/posts", ctrlPosts.getPosts);
router.get("/posts/:id", ctrlPosts.getSinglePost);


module.exports = router;