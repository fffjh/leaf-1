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
    // 优化路由
    app.use(function(req, res, next) {
        console.log(req.path);
        if (req.path.indexOf('/api') >= 0) {
            next();
        } else if (req.path.length >= 2) {
            res.render('index');
            app.get(req.path);
            next();
        } else {
            next();
        }
    });

    // api
    app.post('/api/signup', api.signup);
    app.post('/api/signin', api.signin);
    app.post('/api/updateProfile', api.updateProfile);
    app.post('/api/updateAccount', api.updateAccount);
    app.post('/api/updateAvatar', api.updateAvatar);
    app.get('/api/signout', api.signout);
    app.get('/api/myprofile', api.myprofile);
    app.get('/api/settings', api.settings);
    app.get('/api/checkSignin', api.checkSignin);
    app.get('test.json', function(req, res) {
        console.log("get('./test.json')");
    })

    // otherwise
    // app.get('*', function(req, res) {
    //     res.redirect('/');
    // });
}
