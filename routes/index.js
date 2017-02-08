module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });
    app.get('/partials/:name', function(req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    });
    // otherwise
    app.get('*', function(req, res) {
        res.redirect('/');
    });

    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
}
