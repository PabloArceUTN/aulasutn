'use strict';

/**
* @ngdoc function
* @name aulasutnApp.controller:SesionCtrl
* @description
* # SesionCtrl
* Controller of the aulasutnApp
*/
angular.module('aulasutnApp')
.controller('SessionCtrl', function ($scope, $http) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.login = function(user){
    //Check for an existent remember param
    if (!user.remember)
    user.remember = false;

    console.log(user);
    //Encapsulate the user data
    var data = {"email":user.email,"password":user.password, "remember": user.remember.toString()};
    //Create, Execute and validate the post request
    $http.post('http://localhost:8000/api/authenticate', data).then(function successCallback(responce) {
      console.log(responce);
      if (!user.remember) {
        //session storage responce.data.token
        sessionStorage.UserRemember = false;
        sessionStorage.UserToken = responce.data.token;
      }else {
        //local storage
        localStorage.UserRemember = false;
        localStorage.UserToken = responce.data.message;
      }
      //Redirect to the dashboard
    },function errorCallback(responce) {
      console.log(responce);
      alert("Los datos no coinciden, intente de nuevo");
    });
  }
  // $scope.users = Users.query(function(){
  //   console.log('I am done loading users...')
  //   console.log(  $scope.users);
  // }, function(error) {
  //   console.log('There was an error users', error.statusText);
  // });
  //End of the scope
});
