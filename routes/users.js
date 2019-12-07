var express = require('express');
var router = express.Router();
const UsersController = require('../api/controller/usersController');

/* GET users listing. */

router.get('/login', UsersController.login)
router.post('/signUp', UsersController.signUp)


module.exports = router;
