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
    // Service logic
    // ...

    //var meaningOfLife = 42;

    // Public API here
    //return {
    //  someMethod: function () {
    //    return meaningOfLife;
    //  }
    //};
      return $resource('http://localhost:8000/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ2MDc4NzIxMiwiZXhwIjoxNDYwNzkwODEyLCJuYmYiOjE0NjA3ODcyMTIsImp0aSI6IjM3YTFmYzU0YWIwOWY3NjBiMGQ5YzE5YWIyOWVhNmI1Iiwia2V5dGltZSI6eyJkYXRlIjoiMjAxNi0wNC0xNiAwMDoxMzozMi4wMDAwMDAiLCJ0aW1lem9uZV90eXBlIjozLCJ0aW1lem9uZSI6IkFtZXJpY2FcL0Nvc3RhX1JpY2EifSwibGV0cGFzcyI6IiQyeSQxMCQ2VmxEMnl5eTd3S1JhYm5zaHI3RmZPa0w1ZkxUZ09zSzNyZ1VjTldXUzRtYVpYYURCdFI3QyIsImNyZWRlbnRpYWxzIjp7ImVtYWlsIjoiYXR1bkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1In19.pgSj_GlwbgtnAF60t0jUfCBR6AFJ2EsLM5-HANefoDk&remember=false/:id.json');
  });
