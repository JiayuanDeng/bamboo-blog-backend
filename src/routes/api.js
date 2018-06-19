var express = require('express');
var router = express.Router();
var config = require('../config/config');
var expressJwt = require('express-jwt')(config.jwt);


/* Controllers */
var userController = require('../controllers/userController');
var articleController = require('../controllers/articleController');

/* Routes */
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/account', expressJwt, userController.account);

router.post('/articles', expressJwt, articleController.createArticle);
router.get('/articles/:articleId', expressJwt, articleController.getArticle);

/*
router.get('/articles', expressJwt, usersController.article);
router.get('/articles/:articleId', expressJwt, usersController.article);
router.get('/tags', expressJwt, usersController.account);
*/

module.exports = router;
