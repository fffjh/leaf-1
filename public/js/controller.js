"use strict";

function IndexCtrl($scope, $http, $rootScope) {
    $rootScope.$broadcast('authenticationChanged'); // check session to resolve the dropdown list items
}

function SignupCtrl($scope, $http, $location, $rootScope) {
    $scope.signup = function() {
        swal({
            title: "Welcom to Leaf",
            text: "Please check your email again: \n" + $scope.formData.email,
            type: "success",
            showCancelButton: true,
            confirmButtonColor: "#8cd4f5",
            confirmButtonText: "Yes, sign up!",
            closeOnConfirm: false,
            html: false
        }, function() {
            $http.post('/api/signup', $scope.formData)
                .then(function(data) {
                    if (data.data.status) {
                        $rootScope.$broadcast('authenticationChanged');
                        swal('注册成功!', 'Hi, ' + data.data.email + '!\nLeaf已向您发送一封验证邮件，为了您的安全，请尽快完成验证。\n接下来将自动为您登陆.', 'success');
                        $location.path('/');
                    } else {
                        swal('注册失败!', data.data.message, 'error');
                    }
                }, function(error) {
                    swal('注册失败!', '未知错误', 'error');
                    console.log('Error: ' + error);
                });
        });
    };
};

function SigninCtrl($scope, $http, $location, $rootScope) {
    $scope.signin = function() {
        $http.post('/api/signin', $scope.formData)
            .then(function(data) {
                if (data.data.status) {
                    $rootScope.$broadcast('authenticationChanged');
                    swal('登陆成功!', 'Hi, ' + data.data.email + ' !', 'success');
                    $location.path('/');
                } else {
                    swal('登陆失败!', data.data.message, 'error');
                }
            }, function(error) {
                swal('登陆失败!', '未知错误', 'error');
                console.log('Error: ' + error);
            });
    };
};

function MyprofileCtrl($scope, $http) {}

function SignoutCtrl($scope, $http, $location, $rootScope) {
    swal({
        title: "Leave Leaf?",
        text: "Your session will be deleted",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, I'll leave!",
        closeOnConfirm: false,
        html: false
    }, function() {
        $http.get('/api/signout')
            .then(function() {
                $rootScope.$broadcast('authenticationChanged');
                swal('登出成功!', 'Your session has been deleted!', 'success');
                $location.path('/');
            }, function(error) {
                swal('登出失败!', '未知错误', 'error');
                console.log('Error: ' + error);
            });
    });
};

function NewLeafCtrl($scope, $http, $location) {};

function OneLeafCtrl($scope, $http, $location) {};

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
                console.log('Error:' + data);
            });
    });
});
