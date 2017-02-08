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
        // template: 'h2 Hello particals/index.',
        controller: LoginCtrl
    }).
    when('/signin', {
        templateUrl: 'partials/signin',
        // template: 'h2 Hello particals/index.',
        controller: LoginCtrl
    }).
    otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true); // HTML5模式的路由，可以直接去掉#号
});

// app.config(['$locationProvider', '$routeProvider',
//     function config($locationProvider, $routeProvider) {
//         $routeProvider.
//         when('/', {
//             templateUrl: 'partials/index',
//             controller: IndexCtrl
//         }).
//         when('/login', {
//             templateUrl: 'partials/login',
//             // template: 'h2 Hello particals/index.',
//             controller: LoginCtrl
//         }).
//         otherwise({
//             redirectTo: '/'
//         });
//         $locationProvider.html5Mode(true); // HTML5模式的路由，可以直接去掉#号
//     }
// ]);
