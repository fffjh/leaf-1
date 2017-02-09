"use strict";

function IndexCtrl($scope, $http) {}

function SignupCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.signup = function() {
        $http.post('/api/signup', $scope.formData)
            .then(function(data) {
                $location.path('/');
            })
            .catch(function(data) {
                console.log('Error: ' + data);
            });
    };
};

function SigninCtrl($scope, $http) {
    $scope.form = {};
    $scope.signin = function() {
        $http.post('/api/signin', $scope.formData)
            .then(function(data) {
                $location.path('/');
            })
            .catch(function(data) {
                console.log('Error: ' + data);
            });
    }
}
