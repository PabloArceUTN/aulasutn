'use strict';

/**
 * @ngdoc service
 * @name aulasutnApp.courses
 * @description
 * # courses
 * Factory in the aulasutnApp.
 */
angular.module('aulasutnApp')
  .factory('courses', function ($resource) {
        return $resource('http://localhost:8000/courses/:id.json');
  });
