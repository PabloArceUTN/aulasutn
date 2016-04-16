'use strict';

/**
 * @ngdoc function
 * @name aulasutnApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the aulasutnApp
 */
angular.module('aulasutnApp')
  .controller('UserCtrl', function ($scope, Users) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.users = Users.query(function(){
      console.log('I am done loading users...')
      console.log(  $scope.users);
    }, function(error) {
      console.log('There was an error users', error.statusText);
    });
  });
