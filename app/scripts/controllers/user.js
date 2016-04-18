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
    //Create
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
    //Delete
    $scope.delete = function(id){
      var deleteUser = window.confirm('Are you absolutely sure you want to delete?');
       if (deleteUser) {
         if (sessionStorage.UserRemember==null) {
           var utoken = localStorage.UserToken;
           var urem = localStorage.UserRemember;
         }else {
           var utoken = sessionStorage.UserToken;
           var urem = sessionStorage.UserRemember;
         }
         console.log(id);
         $http.delete('http://localhost:8000/api/users/'+ id +'?token='+utoken+'&remember='+urem).then(function successCallback(responce)
         {
             window.alert('Going to delete the user ' + id );
         },function errorCallback(responce) {
           alert("Ha ocurrido un error... intente nuevamente");
         });
       }
     }

    //Update
    $scope.updateUser = function(pUsers){
        var data = {"email": pUsers.email,"password": pUsers.password, "name":pUsers.name, "phone_number": pUsers.phone_number, "admin":pUsers.admin, "teacher":pUsers.teacher, "active":pUsers.active};
      console.log(data);
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http.put('http://localhost:8000/api/users/'+ sessionStorage.userId +'?token='+utoken+'&remember='+urem, data).then(function successCallback(responce) {
        alert("El usuario ha sido actualizado");
        window.location = "http://localhost:9000/#/users";
      },function errorCallback(responce) {
        alert("Ha ocurrido un error... intente nuevamente");
      });
    }
    //Edit
    $scope.editUsers = function(id){
      sessionStorage.usersId = id;
    }
    //SHow oruse
    $scope.showUsers = function(){
      if (sessionStorage.UserRemember==null) {
        var utoken = localStorage.UserToken;
        var urem = localStorage.UserRemember;
      }else {
        var utoken = sessionStorage.UserToken;
        var urem = sessionStorage.UserRemember;
      }
      $http({
        method: 'GET',
        url: 'http://localhost:8000/api/users/'+ sessionStorage.userId +'?token='+utoken+'&remember='+urem
      }).then(function successCallback(response) {
        console.log(response);
        document.getElementById('name').value = "**"+response.data.name;
        document.getElementById('descripcion').value = "**"+response.data.descripcion;
      }, function errorCallback(response) {
        alert("Error al cargar los datos para modificar, intente de nuevo");
        window.location = "http://localhost:9000/#/users";
      });
    }
  });
