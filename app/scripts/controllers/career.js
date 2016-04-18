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
    //creat
    $scope.addCareer = function(pCareer){
      var data = {"code": pCareer.code,"name": pCareer.name};
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http.post('http://localhost:8000/api/carrers/?token='+utoken+'&remember='+urem, data).then(function successCallback(responce) {
        alert("La carerra ha sido creado");
        window.location = "localhost:9000/#/careers";
      },function errorCallback(responce) {
        alert("Ha ocurrido un error... intente nuevamente");
      });
    }
  });
