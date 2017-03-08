'use secret';

var UserModel = require('../models/users');

// Sign up
exports.signup = function(req, res) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;

    // check
    var emailForm = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i;
    try {
        if (!emailForm.test(email)) {
            throw new Error('邮箱格式错误');
        }
        if (password.length < 6) {
            throw new Error('密码至少 6 个字符');
        }
    } catch (e) {
        console.log('sign up fail');
        return res.json({
            'status': false,
            'message': e.message
        });
    }
    UserModel.getUserByEmail(email)
        .then(function(user) {
            if (user) {
                return res.json({
                    'status': false,
                    'message': '用户已存在'
                })
            }
        });

    // 待写入数据库的用户信息
    var user = {
        email: email,
        password: password
    };

    // 用户信息写入数据库
    UserModel.create(user)
        .then(function(user) {
            console.log('注册成功');
            // 将用户信息存入 session
            delete user.password;
            req.session.user = user;
            return res.json({
                'status': true,
                'email': email
            })
        });
};

// Sign in
exports.signin = function(req, res) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;

    UserModel.getUserByEmail(email)
        .then(function(user) {
            try {
                if (!user) {
                    throw new Error('用户不存在');
                }
                if (password !== user.password) {
                    throw new Error('邮箱或密码错误');
                }
            } catch (e) {
                return res.json({
                    'status': false,
                    'message': e.message
                });
            }
            console.log('登陆成功');
            delete user.password;
            req.session.user = user;
            return res.json({
                'status': true,
                'email': email
            })
        });
};

// Sign out
exports.signout = function(req, res, next) {
    req.session.destroy();
    res.redirect('/');
};

exports.myprofile = function(req, res, next) {
    if (!!req.session.user) {
        UserModel.getUserByEmail(req.session.user.email)
            .then(user => {
                res.json({
                    'email': user.email,
                });
            });
    }
};

exports.settings = function(req, res, next) {
    if (!!req.session.user) {
        UserModel.getUserByEmail(req.session.user.email)
            .then(user => {
                res.json({
                    'email': user.email,
                });
            });
    }
};

exports.checkSignin = function(req, res, next) {
    if (!!req.session.user) {
        return res.json({
            'signedin': true
        });
    } else {
        return res.json({
            'signedin': false
        })
    };
};
