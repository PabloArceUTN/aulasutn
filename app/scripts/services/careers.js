'use strict';

/**
 * @ngdoc service
 * @name aulasutnApp.careers
 * @description
 * # careers
 * Factory in the aulasutnApp.
 */
angular.module('aulasutnApp')
  .factory('Careers', function ($resource) {
    // Service logic
    // ...

  //  var meaningOfLife = 42;

    // Public API here
//    return {
    //  someMethod: function () {
    //    return meaningOfLife;
    //  }
    return $resource('http://localhost:8000/careers/');
  });
