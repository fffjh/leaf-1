"use strict";

var app = angular.module('myApp', ['ngRoute']);

app.config(function config($locationProvider, $routeProvider) {
    $routeProvider.
    when('/', {
        title: 'Home | ',
        templateUrl: 'partials/index',
        controller: IndexCtrl
    }).
    when('/signup', {
        title: 'Signup | ',
        templateUrl: 'partials/signup',
        controller: SignupCtrl
    }).
    when('/signin', {
        title: 'Signin | ',
        templateUrl: 'partials/signin',
        controller: SigninCtrl
    }).
    when('/myprofile', {
        title: 'My profile | ',
        templateUrl: 'partials/myprofile',
        controller: MyprofileCtrl
    }).
    when('/signout', {
        title: 'Signout | ',
        templateUrl: 'partials/index',
        controller: SignoutCtrl
    }).
    when('/leaf/:leafId', {
        templateUrl: 'partials/leaf/',
        controller: LeafCtrl
    }).
    otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true); // HTML5模式的路由，可以直接去掉#号
});
