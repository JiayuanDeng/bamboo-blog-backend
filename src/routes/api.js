var express = require('express');
var router = express.Router();
var config = require('../config/config');
var expressJwt = require('express-jwt')(config.jwt);


/* Controllers */
var usersController = require('../controllers/userController');

/* Routes */
router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/account', expressJwt, usersController.account);

/*
router.get('/articles', expressJwt, usersController.article);
router.get('/articles/:articleId', expressJwt, usersController.article);
router.get('/tags', expressJwt, usersController.account);
*/

module.exports = router;
