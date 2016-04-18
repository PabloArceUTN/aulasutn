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
    $scope.office = Offices.query(function(){
      console.log('I am done loading users...')
      console.log($scope.office);
    }, function(error) {
      console.log('There was an error users', error.statusText);
    });
    //creat
    $scope.addOffice = function(pOffice){
      var data = {"name": pOffice.name,"description": pOffice.description};
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http.post('http://localhost:8000/api/offices/?token='+utoken+'&remember='+urem, data).then(function successCallback(responce) {
        alert("La office ha sido creado");
        window.location = "localhost:9000/#/office";
      },function errorCallback(responce) {
        alert("Ha ocurrido un error... intente nuevamente");
      });
    }
  });
