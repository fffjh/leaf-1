var config = require('config');
var mongoose = require('mongoose'); // mongoose for mongodb
mongoose.Promise = global.Promise; // solve Mongoose: mpromise (mongoose's default promise library) is deprecated
mongoose.connect(config.get('mongodb'));

// User
exports.User = mongoose.model('User', {
    email: {
        type: String,
        unique: true
    },
    password: String,
    // name ...
});

// Tree
