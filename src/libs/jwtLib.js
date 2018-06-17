var jwt = require("jsonwebtoken");
var config = require('../config/config');

module.exports = {
  sign: (username) => {
    var token = jwt.sign(
      {
        username: username,
        refresh: 'true'
      },
      config.jwt.secret,
      {
        expiresIn: config.jwt.expiresIn
      }
    );
    console.log('Signed token of ' + JSON.stringify(jwt.decode(token, {json: true})));
    return token;
  },
  getRes: (username) => {
    var accessToken = jwtLib.sign(username);
    var decodedAccessToken = jwt.decode(accessToken, {json: true});
    return {
      credential: {
        access_token: accessToken,
        username: decodedAccessToken.username,
        expire: decodedAccessToken.exp
      }
    }
  }
};