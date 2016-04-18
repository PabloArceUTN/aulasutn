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
      .when('/careers/create', {
        templateUrl: 'views/career-creat.html',
        controller: 'CareerCtrl',
        controllerAs: 'career'
      })
      .when('/careers/edit', {
        templateUrl: 'views/career-edit.html',
        controller: 'CareerCtrl',
        controllerAs: 'career'
      })
      .when('/users', {
        templateUrl: 'views/users-list.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/users/create', {
        templateUrl: 'views/users-creat.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/users/edits', {
        templateUrl: 'views/users-edit.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/course', {
        templateUrl: 'views/course-list.html',
        controller: 'CourseCtrl',
        controllerAs: 'course'
      })
      .when('/course/create', {
        templateUrl: 'views/course-creat.html',
        controller: 'CourseCtrl',
        controllerAs: 'course'
      })
      .when('/course/edit', {
        templateUrl: 'views/course-edit.html',
        controller: 'CourseCtrl',
        controllerAs: 'course'
      })
      .when('/offices/edit', {
        templateUrl: 'views/office-edit.html',
        controller: 'OfficeCtrl',
        controllerAs: 'office'
      })
      .when('/office', {
        templateUrl: 'views/offices-list.html',
        controller: 'OfficeCtrl',
        controllerAs: 'office'
      })
      .when('/office/creat', {
        templateUrl: 'views/office-creat.html',
        controller: 'OfficeCtrl',
        controllerAs: 'office'
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
