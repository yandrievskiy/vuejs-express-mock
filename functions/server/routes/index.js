const router = require('express').Router();
const controller = require('../controllers');

router.get('/', (req, res) => res.send('Hello World!'));
router.post('/user', controller.createUser);
router.get('/posts', controller.getPosts);

module.exports = router;