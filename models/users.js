var User = require('../lib/mongo').User;

module.exports = {
    // create an user
    create: function create(user) {
        return User.create(user);
    },

    // get user by email
    getUserByEmail: function getUserByemail(email) {
        return User.findOne({
            email: email
        });
    }
};
