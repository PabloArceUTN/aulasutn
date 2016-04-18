'use strict';

/**
 * @ngdoc service
 * @name aulasutnApp.offices
 * @description
 * # offices
 * Factory in the aulasutnApp.
 */
angular.module('aulasutnApp')
  .factory('Offices', function ($resource, url) {
    return resource(url);

});
