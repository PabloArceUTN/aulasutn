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
    //Delete
    $scope.delete = function(id){
      var deleteCareer = window.confirm('Are you absolutely sure you want to delete?');
       if (deleteCareer) {
         if (sessionStorage.UserRemember==null) {
           var utoken = localStorage.UserToken;
           var urem = localStorage.UserRemember;
         }else {
           var utoken = sessionStorage.UserToken;
           var urem = sessionStorage.UserRemember;
         }
         console.log(id);
         $http.delete('http://localhost:8000/api/careers/'+ id +'?token='+utoken+'&remember='+urem).then(function successCallback(responce)
         {
             window.alert('Going to delete the career ' + id );
         },function errorCallback(responce) {
           alert("Ha ocurrido un error... intente nuevamente");
         });
       }
     }

    //Update
    $scope.updateCareer = function(pCareer){
          var data = {"code": pCareer.code,"name": pCareer.name};
      console.log(data);
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http.put('http://localhost:8000/api/careers/'+ sessionStorage.careerId +'?token='+utoken+'&remember='+urem, data).then(function successCallback(responce) {
        alert("El usuario ha sido actualizado");
        window.location = "http://localhost:9000/#/careers";
      },function errorCallback(responce) {
        alert("Ha ocurrido un error... intente nuevamente");
      });
    }
    //Edit
    $scope.editCareers = function(id){
      sessionStorage.careerId = id;
    }
    //SHow oruse
    $scope.showCareers = function(){
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http({
        method: 'GET',
        url: 'http://localhost:8000/api/careers/'+ sessionStorage.careerId +'?token='+utoken+'&remember='+urem
      }).then(function successCallback(response) {
        console.log(response);
        document.getElementById('name').value = "**"+response.data.name;
        document.getElementById('descripcion').value = "**"+response.data.descripcion;
      }, function errorCallback(response) {
        alert("Error al cargar los datos para modificar, intente de nuevo");
        window.location = "http://localhost:9000/#/careers";
      });
    }
  });
