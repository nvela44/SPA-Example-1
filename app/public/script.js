var App = angular.module('App', ['ui.router']);

App.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })
        .state('about', {
            url: '/',
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .state('contact', {
            url: '/',
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })

    $locationProvider.html5Mode(true);
});

App.controller('mainController', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

App.controller('aboutController', function ($scope) {
    $scope.message = "Look! I'm an about page.";
});

App.controller('contactController', function ($scope) {
    $scope.message = "Contact us! JK. This is just a demo.";
});