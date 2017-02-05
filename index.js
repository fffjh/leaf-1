// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
var path = require('path');
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var routes = require('./routes');

// configuration =================
mongoose.connect('mongodb://node:node@jello.modulusmongo.net:27017/z9apyjiS'); // connect to mongoDB database

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.set('views', path.join(__dirname, 'views')); // 设置模板目录
// app.set('view engine', 'jade'); // 设置模板引擎为 jade
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());

// difine routes =================

// get all todos
// ...

// redirect all others to the index(HTML5 history)
app.get('*', routes.index);

// // get the index.html
// app.get('*', function(req, res) {
//     res.sendfile('./views/index.html'); // load the single view file( angular will handle teh page changes on the front-end)
// });

// start server ==================
app.listen(8080);
console.log('app listening on port 8080');
