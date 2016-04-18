'use strict';

/**
 * @ngdoc overview
 * @name aulasutnApp
 * @description
 * # aulasutnApp
 *
 * Main module of the application.
 */
angular
  .module('aulasutnApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/careers', {
        templateUrl: 'views/career-list.html',
        controller: 'CareerCtrl',
        controllerAs: 'career'
      })
      .when('/users', {
        templateUrl: 'views/users-list.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'SessionCtrl',
        controllerAs: 'session'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
