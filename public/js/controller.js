"use strict";

function IndexCtrl($scope, $http, $location, $rootScope, toastr) {
    $scope.ngViewClass = 'page-home';
    $scope.switchToSignup = function() {
        $scope.toSignup = true;
        $rootScope.title = 'Register';
    };
    $scope.switchToSignin = function() {
        $scope.toSignup = false;
        $rootScope.title = 'Signin';
    };
    $scope.signup = function() {
        swal({
            title: $scope.formData.email + " ?",
            text: "Please check your email again. \n",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#8cd4f5",
            confirmButtonText: "Yes, register!",
            closeOnConfirm: false,
            html: false
        }, function() {
            $http.post('/api/signup', $scope.formData)
                .then(function(data) {
                    if (data.data.status) {
                        $rootScope.$broadcast('authenticationChanged');
                        swal('注册成功!', 'Hi, ' + data.data.email + '!\nLeaf已向您发送一封验证邮件，为了您的安全，请尽快完成验证。\n接下来将自动为您登陆.', 'success');
                        $location.path('/myprofile');
                    } else {
                        swal('注册失败!', data.data.message, 'error');
                    }
                }, function(error) {
                    swal('注册失败!', '未知错误', 'error');
                    console.log('Error: ' + error);
                });
        });
    };
    $scope.signin = function() {
        $http.post('/api/signin', $scope.formData)
            .then(function(data) {
                if (data.data.status) {
                    $rootScope.$broadcast('authenticationChanged');
                    // swal('登陆成功!', 'Hi, ' + data.data.email + ' !', 'success');
                    toastr.success('Sign in Success!');
                    $location.path('/myprofile');
                } else {
                    swal('登陆失败!', data.data.message, 'error');
                }
            }, function(error) {
                swal('登陆失败!', '未知错误', 'error');
                console.log('Error: ' + error);
            });
    };
}

function SignupCtrl($scope, $http, $location, $rootScope, toastr) {
    $scope.ngViewClass = 'page-signin';
    $scope.switchToSignin = function() {
        $scope.toSignin = true;
        $rootScope.title = 'Signin';
    };
    $scope.switchToSignup = function() {
        $scope.toSignin = false;
        $rootScope.title = 'Register';
    };
    $scope.signup = function() {
        swal({
            title: $scope.formData.email + " ?",
            text: "Please check your email again. \n",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#8cd4f5",
            confirmButtonText: "Yes, register!",
            closeOnConfirm: false,
            html: false
        }, function() {
            $http.post('/api/signup', $scope.formData)
                .then(function(data) {
                    if (data.data.status) {
                        $rootScope.$broadcast('authenticationChanged');
                        swal('注册成功!', 'Hi, ' + data.data.email + '!\nLeaf已向您发送一封验证邮件，为了您的安全，请尽快完成验证。\n接下来将自动为您登陆.', 'success');
                        $location.path('/myprofile');
                    } else {
                        swal('注册失败!', data.data.message, 'error');
                    }
                }, function(error) {
                    swal('注册失败!', '未知错误', 'error');
                    console.log('Error: ' + error);
                });
        });
    };
    $scope.signin = function() {
        $http.post('/api/signin', $scope.formData)
            .then(function(data) {
                if (data.data.status) {
                    $rootScope.$broadcast('authenticationChanged');
                    // swal('登陆成功!', 'Hi, ' + data.data.email + ' !', 'success');
                    toastr.success('Sign in Success!');
                    $location.path('/myprofile');
                } else {
                    swal('登陆失败!', data.data.message, 'error');
                }
            }, function(error) {
                swal('登陆失败!', '未知错误', 'error');
                console.log('Error: ' + error);
            });
    };
};

function SigninCtrl($scope, $http, $location, $rootScope, toastr) {
    $scope.ngViewClass = 'page-signin';
    $scope.switchToSignup = function() {
        $scope.toSignup = true;
        $rootScope.title = 'Register';
    };
    $scope.switchToSignin = function() {
        $scope.toSignup = false;
        $rootScope.title = 'Signin';
    };
    $scope.signup = function() {
        swal({
            title: $scope.formData.email + " ?",
            text: "Please check your email again. \n",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#8cd4f5",
            confirmButtonText: "Yes, register!",
            closeOnConfirm: false,
            html: false
        }, function() {
            $http.post('/api/signup', $scope.formData)
                .then(function(data) {
                    if (data.data.status) {
                        $rootScope.$broadcast('authenticationChanged');
                        swal('注册成功!', 'Hi, ' + data.data.email + '!\nLeaf已向您发送一封验证邮件，为了您的安全，请尽快完成验证。\n接下来将自动为您登陆.', 'success');
                        $location.path('/myprofile');
                    } else {
                        swal('注册失败!', data.data.message, 'error');
                    }
                }, function(error) {
                    swal('注册失败!', '未知错误', 'error');
                    console.log('Error: ' + error);
                });
        });
    };
    $scope.signin = function() {
        $http.post('/api/signin', $scope.formData)
            .then(function(data) {
                if (data.data.status) {
                    $rootScope.$broadcast('authenticationChanged');
                    // swal('登陆成功!', 'Hi, ' + data.data.email + ' !', 'success');
                    toastr.success('Sign in Success!');
                    $location.path('/myprofile');
                } else {
                    swal('登陆失败!', data.data.message, 'error');
                }
            }, function(error) {
                swal('登陆失败!', '未知错误', 'error');
                console.log('Error: ' + error);
            });
    };
};

function MyprofileCtrl($scope, $http, $rootScope) {
    $rootScope.$broadcast('authenticationChanged');
    $http.get('/api/myprofile')
        .then(function(data) {
            $scope.name = data.data.name;
            $scope.email = data.data.email;
            $scope.description = data.data.description;
        }, function(error) {
            console.log('Error: ' + error);
        });
};

// Browse
function BrowseUserCtrl($scope, $http, $rootScope, $routeParams) {
    $rootScope.$broadcast('authenticationChanged');
    $http.get('/api/browse/user/' + $routeParams.userEmail)
        .then(function(data) {
            $scope.name = data.data.name;
            $scope.email = data.data.email;
            $scope.description = data.data.description;
        }, function(error) {
            console.log('Error: ' + error);
        });
};

function MymessagesCtrl($scope, $http, $rootScope) {};

function RequestsCtrl($scope, $http, $rootScope) {};

function HelpCtrl($scope, $http, $rootScope) {};

function SettingsCtrl($scope, $http, $rootScope) {
    $rootScope.$broadcast('authenticationChanged');
    $http.get('/api/settings')
        .then(function(data) {
            $scope.name = data.data.name;
            $scope.email = data.data.email;
            $scope.description = data.data.description;
        }, function(error) {
            console.log('Error: ' + error);
        });
};

app.controller('updateProfileCtrl', function($http, $rootScope, $scope) {
    $scope.updateProfile = function() {
        console.log($scope.formData);
        $http.post('/api/updateProfile', $scope.formData)
            .then(function(data) {
                toastr.success('Update Profile Success!');
            });
    };
});

app.controller('updateAccountCtrl', function($http, $rootScope, $scope) {
    $scope.updateAccount = function() {
        $http.post('/api/updateAccount', $scope.formData);
    };
});

app.controller('updateAvatarCtrl', function($http, $rootScope, $scope) {
    $scope.updateAvatar = function() {
        $http.post('/api/updateAvatar', $scope.formData);
    };
});

function SignoutCtrl($scope, $http, $location, $rootScope, toastr) {
    $rootScope.$broadcast('authenticationChanged');
    $http.get('/api/myprofile')
        .then(function(data) {
            $scope.name = data.data.name;
            $scope.email = data.data.email;
            $scope.description = data.data.description;
        }, function(error) {
            console.log('Error: ' + error);
        });
    swal({
        title: "Leave Leaf?",
        text: "Your session will be deleted",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, leave!",
        closeOnConfirm: false,
        html: false
    }, function() {
        $http.get('/api/signout')
            .then(function() {
                $rootScope.$broadcast('authenticationChanged');
                swal('登出成功!', 'Your session has been deleted!', 'success');
                // toastr.success('Your session has been deleted!', 'Sign out Success');
                $location.path('/');
            }, function(error) {
                swal('登出失败!', '未知错误', 'error');
                console.log('Error: ' + error);
            });
    });
};

function LeafCtrl($scope, $http, $location) {
    // leaf 页面 右边栏数据
    $scope.nodeData = {
        nodeId: '这是这一组数据的ID，这些数据可以通过ID来获取',
        author: {
            avatar: 'img/avatar.png',
            profile: '/browse/user/chroslen',
            name: 'Larry',
            description: 'sophomore, at SYSU.',
            leavesNum: 4,
            tagsNum: 3,
            github: 'https://github.com/',
            mail: 'larry@gmail.com'
        },
        themes: ['作业汇总', 'web2.0', '课程作业'],
        tags: '未完成,school',
        description: "this is a description.",
        notes: "Lato is free web-font designed by Lukasz Dziedzic from Warsaw. Here you can feel the color, size, line height and margins between paragraphs. Don’t forget to underline your links, they are an important visual marker for users.",
        documents: [{
            name: '06-physics.pdf',
            date: '17, Mar, 2017',
            size: '2Mb'
        }, {
            name: 'Jacob.css',
            date: '13, Mar, 2017',
            size: '1kb'
        }, {
            name: 'Larry.rmvb',
            date: '15, Mar, 2017',
            size: '234Mb'
        }],
        plans: [{
            state: true,
            title: '实验一',
            content: '到实验室完成实验一',
            deadline: '4, Mar. 2017'
        }, {
            state: false,
            title: '实验二',
            content: '到实验室完成实验二',
            deadline: '11, Mar. 2017'
        }]
    }
};

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

app.controller('checkSigninCtrl', function($http, $rootScope, $scope) {
    $rootScope.$on('authenticationChanged', function() {
        $http.get('/api/checkSignin')
            .then(function(data) {
                $scope.signedin = data.data.signedin;
            }, function(error) {
                console.log('Error: ' + error);
            });
    });
});

// toastr config
app.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 0,
        newestOnTop: true,
        positionClass: 'toast-bottom-center',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body'
    });
});

function BrowseCtrl($scope, $http, $routeParams) {
    $scope.ngViewClass = 'page-browse';
    // users
    $http.get('/api/browse')
        .then(function(data) {
            console.log(data.data);
            $scope.users = data.data;
        }, function(error) {
            console.log('Error: ' + error);
        });

    $scope.leaves = [{
        topic: "web",
        type: "leaf"
    }, {
        topic: "angularJS",
        type: "leaf local"
    }];
    $scope.documents = [{
        documentName: "Operating System week2.pdf",
        type: "document local"
    }, {
        documentName: "News English week3.pdf",
        type: "document"
    }];
};

function new_functionCtrl($scope, $http, $routeParams) {}
