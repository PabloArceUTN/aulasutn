'use strict';

/**
* @ngdoc function
* @name aulasutnApp.controller:CourseCtrl
* @description
* # CourseCtrl
* Controller of the aulasutnApp
*/
angular.module('aulasutnApp')
.controller('CourseCtrl', function ($scope, Courses,  $http) {
  // this.awesomeThings = [
  //   'HTML5 Boilerplate',
  //   'AngularJS',
  //   'Karma'
  // ];
  $scope.courses = Courses.query(function(){
    console.log('I am done loading users...')
    console.log($scope.courses);
  }, function(error) {
    console.log('There was an error users', error.statusText);
  });

  $scope.addCourse = function(pCourse){
    var data = {"code": pCourse.code,"name": pCourse.name};
    if (sessionStorage.UserRemember==null) {
      var utoken = localStorage.UserToken;
      var urem = localStorage.UserRemember;
    }else {
      var utoken = sessionStorage.UserToken;
      var urem = sessionStorage.UserRemember;
    }
    $http.post('http://localhost:8000/api/courses/?token='+utoken+'&remember='+urem, data).then(function successCallback(responce) {
      alert("El curso ha sido creado");
      window.location = "localhost:9000/#/course";
    },function errorCallback(responce) {
      alert("Ha ocurrido un error... intente nuevamente");
    });
  }

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
       $http.delete('http://localhost:8000/api/courses/' +id+'?token'+utoken+'&remember='+urem).then(function successCallback(responce)
       {
           window.alert('Going to delete the user ' + id );
       },function errorCallback(responce) {
         alert("Ha ocurrido un error... intente nuevamente");
       });
     }
  }

});
