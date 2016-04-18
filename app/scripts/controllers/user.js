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
    $scope.addUser = function(pUsers){
      var data = {"email": pUsers.email,"password": pUsers.password, "name":pUsers.name, "phone_number": pUsers.phone_number, "admin":pUsers.admin, "teacher":pUsers.teacher, "active":pUsers.active
    };
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http.post('http://localhost:8000/api/users/?token='+utoken+'&remember='+urem, data).then(function successCallback(responce) {
        alert("La users ha sido creado");
        window.location = "localhost:9000/#/users";
      },function errorCallback(responce) {
        alert("Ha ocurrido un error... intente nuevamente");
      });
    }
  });
