# limb-ui
limb-ui is the ui of project limb.

## installation

### 1. clone the repo

	git clone https://github.com/chroslen/limb-ui.git

### 2. NPM install

	cd limb-ui
	npm install

### 3. start the server

	node index.js
	
you can use supervisor as well

	supervisor --hemony index

### 4. the lastest issues

- ng-if have some problem with res.local, and I didn't find out. （导致用户未登录与已登录无差别，无法出现 my profile 等）
- 明文加密
- 文中问题的处理 http://blog.fens.me/angularjs-url/
