var userModel = require('../models/userModel');
var errorLib = require('../libs/errorLib');


module.exports = {
    createUser: (username, password) => {
        return new Promise((resolve, reject) => {
            var userData = {
                username: username,
                password: password
            };
            userModel.create(userData, (err) => {
                if (err)
                    reject(errorLib.databaseFailureError);
                else
                    resolve();
            });
        });
    },
    getUser: (username, password) => {
        return new Promise((resolve, reject) => {
            userModel.findOne({username: username, password: password}, (err, user) => {
                if (err) {
                    reject(errorLib.databaseFailureError);
                }
                else if (!user) {
                    reject(errorLib.badCredentialError);
                }
                else {
                    resolve();
                }
            });
        });
    },
    ifNotExist: (username) => {
        return new Promise((resolve, reject) => {
            userModel.findOne({username: username}, (err, user) => {
                if (err) {
                    reject(errorLib.databaseFailureError);
                }
                else if (user) {
                    reject(errorLib.userAlreadyExistsError);
                }
                else {
                    resolve();
                }
            })
        })
    }
};