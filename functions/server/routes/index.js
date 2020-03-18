const router = require('express').Router();
const controller = require('../controllers');

router.get('/', (req, res) => res.send('Hello World!'));
router.post('/auth', controller.auth);
router.get('/posts/:id?', controller.getPosts);
router.get('/post/:id', controller.getSinglePost);

module.exports = router;