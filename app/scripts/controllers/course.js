'use strict';

/**
 * @ngdoc function
 * @name aulasutnApp.controller:CourseCtrl
 * @description
 * # CourseCtrl
 * Controller of the aulasutnApp
 */
angular.module('aulasutnApp')
  .controller('CourseCtrl', function ($scope, Course) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.courses = Courses.query(function(){
      console.log('I am done loading users...')
      console.log(  $scope.courses);
    }, function(error) {
      console.log('There was an error users', error.statusText);
    });
  });
