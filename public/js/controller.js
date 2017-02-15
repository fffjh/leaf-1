"use strict";

function IndexCtrl($scope, $http) {}

function SignupCtrl($scope, $http, $location, $rootScope, toastr) {
    $scope.signup = function() {
        $http.post('/api/signup', $scope.formData)
            .then(function(data) {
                toastr.success('我们已发送一封验证邮件到您的邮箱，为了安全，请在十五天内完成验证', '注册成功！', {
                    closeButton: true
                });
                console.log('signed up!');
                $rootScope.$broadcast('authenticationChanged');
                $location.path('/');
            }, function(error) {
                toastr.error('注册失败！', {
                    closeButton: true
                });
                console.log('Error: ' + error);
            });
    };
};

function SigninCtrl($scope, $http, $location, $rootScope, toastr) {
    $scope.signin = function() {
        $http.post('/api/signin', $scope.formData)
            .then(function(data) {
                toastr.success('登陆成功！', {
                    closeButton: true
                });
                console.log('signed in!');
                $rootScope.$broadcast('authenticationChanged');
                $location.path('/');
            }, function(error) {
                toastr.error('登陆失败！', {
                    closeButton: true
                });
                console.log('Error: ' + error);
            });
    };
};

function MyprofileCtrl($scope, $http) {}

function SignoutCtrl($scope, $http, $location, $rootScope, toastr) {
    $http.get('/api/signout')
        .then(function() {
            toastr.success('登出成功！', {
                closeButton: true
            });
            console.log('signed out!');
            $rootScope.$broadcast('authenticationChanged');
            $location.path('/');
        }, function(error) {
            toastr.error('登出失败！', {
                closeButton: true
            });
            console.log('Error: ' + error);
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
