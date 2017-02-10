'use secret';

var UserModel = require('../models/users');

// Auto sign in

const autoSignin = function(req, res, next) {
    console.log('auto signin');
    if (!!req.session.user) {
        console.log('success');
        UserModel.getUserByEmail(req.session.user.email)
            .then(user => {
                res.locals.user = user;
                next();
            });
    } else {
        console.log('fail');
        res.locals.user = null;
        next();
    }
}

module.exports = autoSignin;
