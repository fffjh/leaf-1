'use secret';

var UserModel = require('../models/users');

// Auto sign in

const autoSignin = function(req, res, next) {
    console.log('autosignin');
    if (!!req.session.user) {
        console.log('success');
        UserModel.getUserByEmail(req.session.user.email)
            .then(user => {
                res.local.user = user;
                next();
            });
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = autoSignin;
