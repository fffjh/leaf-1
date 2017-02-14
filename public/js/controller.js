"use strict";

function IndexCtrl($scope, $http) {}

function SignupCtrl($scope, $http, $location, $window) {
    $scope.form = {};
    $scope.signup = function() {
        $http.post('/api/signup', $scope.formData)
            .then(function(data) {
                $scope.reloadRoute = function() {
                    $window.location.reload();
                }
                console.log('signed up!');
                $location.path('/');
            })
            .catch(function(data) {
                console.log('Error: ' + data);
            });
    };
};

function SigninCtrl($scope, $http, $location, $route, $window) {
    $scope.form = {};
    $scope.signin = function() {
        $http.post('/api/signin', $scope.formData)
            .then(function(data) {
                setTimeout(function() {
                    window.location.reload();
                }, 100);
                console.log('signed in!');
                $location.path('/');
            })
            .catch(function(data) {
                console.log('Error: ' + data);
            });
    };
};

function MyprofileCtrl($scope, $http) {}

function SignoutCtrl($scope, $http, $location, $route, $window) {
    $http.get('/api/signout')
        .then(function() {
            setTimeout(function() {
                window.location.reload();
            }, 100);
            console.log('signed out!');
            $location.path('/');
        });
};

function NewLeafCtrl($scope, $http, $location) {};

function OneLeafCtrl($scope, $http, $location) {};

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
