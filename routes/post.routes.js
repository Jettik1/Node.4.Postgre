const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost); // ПЕРЕДАТЬ БЕЗ ВЫЗОВА, БЕЗ СКОБОК ()
router.get('/posts', postController.getAllPosts);
router.get('/post', postController.getPostsByUser);
router.get('/post/:id', postController.getOnePost);
router.put('/post', postController.getUpdatePost);
router.delete('/post/:id', postController.deletePost);

module.exports = router;