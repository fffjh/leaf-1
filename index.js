// --- set up
var express = require('express');
var app = express(); // create our app with express
var path = require('path');
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var session = require('express-session'); // session
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var config = require('config'); // configuration, will find /config/default.json
var routes = require('./routes'); // ./routes/index.js
var api = require('./routes/api');
var autoSignin = require('./routes/autoSignin');

// --- configuration
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.set('views', path.join(__dirname, '/views')); // 设置模板目录
app.set('view engine', 'jade'); // 设置模板引擎为 jade
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(session({
    secret: 'Limb',
    cookie: {
        maxAge: 86400000
    },
    user: {}
}));
app.use(autoSignin);
// --- routes
routes(app);

// // --- error page
// app.use(function(req, res, next) {
//     let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// --- start server
app.listen(config.get('port'));
console.log(config.get('app') + ' listening on port ' + config.get('port'));
