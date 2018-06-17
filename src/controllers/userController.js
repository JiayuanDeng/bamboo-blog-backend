var jwtLib = require('../libs/jwtLib');
var userService = require('../services/userService');

module.exports = {
  register: (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    if (username !== undefined && password !== undefined) {
      userService.ifNotExist(username)
        .then(() => {
          userService.createUser(username, password);
          res.status(200).json(jwtLib.getRes(username));
        })
        .catch((err) => {
          next(err);
        });
    }
  },

  login: (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    userService.getUser(username, password)
      .then(() => {
        res.status(200).json(jwtLib.getRes(username));
      })
      .catch((err) => {
        next(err);
      });
  },

  account: (req, res, next) => {
    console.log(req.user.username);
    res.status(200).json(req.user);
  }
};
