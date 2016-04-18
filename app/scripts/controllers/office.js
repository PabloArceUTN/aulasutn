'use strict';

/**
 * @ngdoc function
 * @name aulasutnApp.controller:OfficeCtrl
 * @description
 * # OfficeCtrl
 * Controller of the aulasutnApp
 */
angular.module('aulasutnApp')
  .controller('OfficeCtrl', function ($scope, Offices, $window, $localStorage, $SessionStorage, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.token= function(){
      if ($window.localStorage.UserToken === null) {
        return $window.SessionStorage.UserToken;
        console.log($window.SessionStorage.UserToken);
    }
    else if (SessionStorage.UserToken ===null) {
      return localStorage.UserToken;
    }
    else {
      $window.alert("Por favor realizar el login para poder continuar");
    }
  };
  $scope.remember= function(){
    if (localStorage.UserRemember === null) {
      return SessionStorage.UserRemember;
      console.log(SessionStorage.UserRemember);
  }
  else if (SessionStorage.UserRemember===null) {
    return localStorage.UserRemember;
  }
  else {
    $window.alert("Por favor realizar el login para poder continuar");
  }
};
    $scope.offices = function(token, remember){
      console.log('I am done loading offices...')
      var req = {
          method: 'Get',
          url: 'http://localhost:8000/api/offices',
          headers: {
            'token': token,
            'remember': remember
          }
      $http(req).then(function successCallback(responce) {
              console.log( responce);
    }
    }, function(error) {
      console.log('There was an error users', error.statusText);
    });
    $scope.creat = function(name, description){
      //create a todo
      debugger;
       $scope.offic = new Offices();
          $scope.offic.name = name;
          $scope.offic.description = description;
          $scope.offic.$save();
    }, function(error) {
      console.log('There was an error office', error.statusText);
    }
  });
