'use strict';

/**
 * @ngdoc function
 * @name aulasutnApp.controller:CareerCtrl
 * @description
 * # CareerCtrl
 * Controller of the aulasutnApp
 */
angular.module('aulasutnApp')
  .controller('CareerCtrl', function ($scope, Careers) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.careers = Careers.query(function(){
      console.log('I am done loading careers...')
    }, function(error) {
      console.log('There was an error loading', error.statusText);
    });
  });
