var api = require('./api');

module.exports = function(app) {
    // render
    app.get('/', function(req, res) {
        res.render('index');
    });
    app.get('/partials/:name', function(req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    });

    // api
    app.post('/api/signup', api.signup);
    app.post('/api/signin', api.signin);
    app.get('/api/signout', api.signout);

    // otherwise
    app.get('*', function(req, res) {
        res.redirect('/');
    });
}
