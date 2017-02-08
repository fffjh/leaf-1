var config = require('config');
var mongoose = require('mongoose'); // mongoose for mongodb
mongoose.connect(config.get('mongodb'));

// User
exports.User = mongoose.model('User', {
    email: String
    password: String
    name: String
});

// Tree
