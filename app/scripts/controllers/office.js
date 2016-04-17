'use strict';

/**
 * @ngdoc function
 * @name aulasutnApp.controller:OfficeCtrl
 * @description
 * # OfficeCtrl
 * Controller of the aulasutnApp
 */
angular.module('aulasutnApp')
  .controller('OfficeCtrl', function ($scope, Offices) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.offices = Offices.query(function(){
      console.log('I am done loading offices...')
      console.log(  $scope.offices);
    }, function(error) {
      console.log('There was an error users', error.statusText);
    });
    $scope.creat = function(name, description){
      //create a todo
      debugger;
       $scope.offic = new Offices();
          $scope.offic.name = name;
          $scope.offic.description = description;
          $scope.offic.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ2MDg3OTU4NCwiZXhwIjoxNDYwODgzMTg0LCJuYmYiOjE0NjA4Nzk1ODQsImp0aSI6ImM1ZTMyMDM5MjUwYWU2ODVjZTBmMDAzNmMwMmFkOTI4Iiwia2V5dGltZSI6eyJkYXRlIjoiMjAxNi0wNC0xNyAwMTo1MzowNC4wMDAwMDAiLCJ0aW1lem9uZV90eXBlIjozLCJ0aW1lem9uZSI6IkFtZXJpY2FcL0Nvc3RhX1JpY2EifSwibGV0cGFzcyI6IiQyeSQxMCQ2VmxEMnl5eTd3S1JhYm5zaHI3RmZPa0w1ZkxUZ09zSzNyZ1VjTldXUzRtYVpYYURCdFI3QyIsImNyZWRlbnRpYWxzIjp7ImVtYWlsIjoiYXR1bkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1In19.JSQ9R7s0mKxv2cVOW9B9YIveTpg22a9IdMQxbiU78xU';
          $scope.offic.remember = false;
          $scope.offic.$save();
    }, function(error) {
      console.log('There was an error office', error.statusText);
    }
  });
