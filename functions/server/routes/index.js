const router = require('express').Router();
const controller = require('../controllers');

router.get('/', (req, res) => res.send('Hello World!'));
router.post('/user', controller.createUser);

module.exports = router;