'use secret';

var UserModel = require('../models/users');

// Sign up
exports.signup = function(req, res) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;

    // check
    try {
        if (password.length < 6) {
            throw new Error('密码至少 6 个字符');
        }
    } catch (e) {
        console.log(e.message);
        return;
    }

    // 明文密码加密

    // 待写入数据库的用户信息
    var user = {
        email: email,
        password: password
    };

    // 用户信息写入数据库
    UserModel.create(user)
        .then(function(result) {
            console.log('注册成功');
            // 将用户信息存入 session
            delete user.password;
            req.session.user = user;
            // 跳转到首页
            res.redirect('/');
        });
};

// Sign in
exports.signin = function(req, res) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;

    var user = {
        email: email,
        password: password
    };

    UserModel.getUserByEmail(email)
        .then(function(user) {
            if (!user) {
                // req.flash('error', '用户不存在');
                console.log('用户不存在');
                return res.redirect('back');
            }
            // 检查密码是否匹配
            if (password !== user.password) {
                // req.flash('error', '用户名或密码错误');
                console.log('邮箱或密码错误');
                return res.redirect('back');
            }
            // req.flash('success', '登录成功');
            console.log('登陆成功');
            // 用户信息写入 session
            delete user.password;
            req.session.user = user;
            // 跳转到主页
            res.redirect('back');
        })
    // .catch(next);
};
