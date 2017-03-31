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
    // 几组 node id
    $scope.nodes = ['root', 'web2.0', '课程作业', '模电homework'];

    // 默认读取跟节点数据
    $http.get('/api/getNodeData/root')
        .then(function(data) {
            $scope.nodeData = data.data;
        });

    // 选中其他节点时
    $scope.getNodeData = function(nodeId) {
        $http.get('/api/getNodeData/' + nodeId)
            .then(function(data) {
                $scope.nodeData = data.data;
            });
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

function AboutCtrl($scope, $http, $routeParams) {
    $scope.ngViewClass = 'page-about';
};

function new_functionCtrl($scope, $http, $routeParams) {
    $scope.tree = [{
            id: 1,
            name: 'John',
            score: 130,
            city: 'New York',
            birthday: '1980/2/5',
            children: [{
                    id: 6,
                    name: 'John2',
                    score: 82,
                    city: 'San Fran1',
                    birthday: '1990/1/21'
                },
                {
                    id: 7,
                    name: 'John2',
                    score: 81,
                    city: 'San Fran2',
                    birthday: '1990/1/22',
                    children: [{
                        id: 8,
                        name: 'John3',
                        score: 89,
                        city: 'San Francisco',
                        birthday: '1990/1/21'
                    }]
                }
            ]
        },
        {
            id: 2,
            name: 'Alice',
            score: 123,
            city: 'Washington',
            birthday: '1984/3/7'
        },
        {
            id: 3,
            name: 'Lee',
            score: 149,
            city: 'Shanghai',
            birthday: '1986/10/8'
        },
        {
            id: 4,
            name: 'Mike',
            score: 100,
            city: 'London',
            birthday: '1988/8/12'
        },
        {
            id: 5,
            name: 'Tom',
            score: 89,
            city: 'San Francisco',
            birthday: '1990/1/21',
            children: [{
                    id: 9,
                    name: 'Tom1',
                    score: 77,
                    city: 'San Francisco',
                    birthday: '1990/1/21'
                },
                {
                    id: 10,
                    name: 'Tom2',
                    score: 85,
                    city: 'San Francisco',
                    birthday: '1990/1/21'
                },
                {
                    id: 11,
                    name: 'Tom3',
                    score: 83,
                    city: 'San Francisco',
                    birthday: '1990/1/21'
                }
            ]
        }
    ];
}
