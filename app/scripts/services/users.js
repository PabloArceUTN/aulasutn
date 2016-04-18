'use strict';

/**
 * @ngdoc service
 * @name aulasutnApp.users
 * @description
 * # users
 * Factory in the aulasutnApp.
 */
angular.module('aulasutnApp')
  .factory('Users', function ($resource) {
      return $resource('http://localhost:8000/users/:id.json');
  });
