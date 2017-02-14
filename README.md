# leaf
this progect used to be `limb`, by team `Königsberg`.

## installation

### 1. clone the repo

  git clone https://github.com/chroslen/leaf.git

### 2. NPM install

  cd leaf
  npm install

### 3. start the server

  node index.js
  
you can use supervisor as well

  supervisor --hemony index

### 4. the lastest issues

- 用户未登录与已登录无差别。此问题与ng-if 和 res.locals.user 有关，正在解决。
- 明文加密
- 文中问题的处理 http://blog.fens.me/angularjs-url/
- 登录后没有跳回主页面
- 注册／登录成功／失败无提示信息，而只能在终端里查看。
- 登录登出等页面太原始，需要美化。

## 开发框架（采取MVC模型）
- config
配置文件夹
- lib

- models
逻辑和数据（若采用了mongodb数据库的话）
- public
静态文件
- routes
路由（控制器）
- views
视图
1. 入口文件index.jade
2. components组件
3. partials局部