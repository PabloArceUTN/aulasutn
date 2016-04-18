'use strict';

/**
 * @ngdoc service
 * @name aulasutnApp.offices
 * @description
 * # offices
 * Factory in the aulasutnApp.
 */
angular.module('aulasutnApp')
  .factory('Offices', function ($resource, token, remember) {
    return resource('localhost:8000/offices:id',{},{
      query: {
             method: 'GET',
             isArray: true,
             headers: { 'token': token, 'remember': remember}
         }
     });
});
