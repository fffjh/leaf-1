"use strict";

var app = angular.module('myApp', ['ngRoute']);

app.config(function config($locationProvider, $routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
    }).
    when('/signup', {
        templateUrl: 'partials/signup',
        controller: SignupCtrl
    }).
    when('/signin', {
        templateUrl: 'partials/signin',
        controller: SigninCtrl
    }).
    otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true); // HTML5模式的路由，可以直接去掉#号
});
