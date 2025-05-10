const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post('/', postController.savePost);
router.get('/', postController.getAllPosts);

module.exports = router;
