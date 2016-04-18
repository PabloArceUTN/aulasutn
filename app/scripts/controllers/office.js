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
    //Delete
    $scope.delete = function(id){
      var deleteOffice = window.confirm('Are you absolutely sure you want to delete?');
       if (deleteOffice) {
         if (sessionStorage.UserRemember==null) {
           var utoken = localStorage.UserToken;
           var urem = localStorage.UserRemember;
         }else {
           var utoken = sessionStorage.UserToken;
           var urem = sessionStorage.UserRemember;
         }
         console.log(id);
         $http.delete('http://localhost:8000/api/offices/'+ id +'?token='+utoken+'&remember='+urem).then(function successCallback(responce)
         {
             window.alert('Going to delete the office ' + id );
         },function errorCallback(responce) {
           alert("Ha ocurrido un error... intente nuevamente");
         });
       }
     }

    //Update
    $scope.updateOffice = function(pOffice){
      var data = {"name": pOffice.name,"description": pOffice.description};
      console.log(data);
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http.put('http://localhost:8000/api/offices/'+ sessionStorage.officeId +'?token='+utoken+'&remember='+urem, data).then(function successCallback(responce) {
        alert("La office ha sido actualizado");
        window.location = "http://localhost:9000/#/office";
      },function errorCallback(responce) {
        alert("Ha ocurrido un error... intente nuevamente");
      });
    }
    //Edit
    $scope.editOffice = function(id){
      sessionStorage.officeId = id;
    }
    //SHow oruse
    $scope.showOffice = function(){
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http({
        method: 'GET',
        url: 'http://localhost:8000/api/offices/'+ sessionStorage.officeId +'?token='+utoken+'&remember='+urem
      }).then(function successCallback(response) {
        console.log(response);
        document.getElementById('name').value = "**"+response.data.name;
        document.getElementById('descripcion').value = "**"+response.data.descripcion;
      }, function errorCallback(response) {
        alert("Error al cargar los datos para modificar, intente de nuevo");
        window.location = "http://localhost:9000/#/office";
      });
    }
  });
