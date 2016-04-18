'use strict';

/**
 * @ngdoc service
 * @name aulasutnApp.courses
 * @description
 * # courses
 * Factory in the aulasutnApp.
 */
angular.module('aulasutnApp')
.factory('Courses', function ($resource) {
        if (sessionStorage.UserRemember==null) {
          var utoken = localStorage.UserToken;
          var urem = localStorage.UserRemember;
        }else {
          var utoken = sessionStorage.UserToken;
          var urem = sessionStorage.UserRemember;
        }
        return $resource('http://localhost:8000/api/courses:id?token='+utoken+'&remember='+urem);
        // courses.query({utoken: sessionStorage.UserToken});
  });
