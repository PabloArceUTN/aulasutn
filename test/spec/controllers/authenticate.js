'use strict';

describe('Controller: AuthenticateCtrl', function () {

  // load the controller's module
  beforeEach(module('aulasutnApp'));

  var AuthenticateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthenticateCtrl = $controller('AuthenticateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthenticateCtrl.awesomeThings.length).toBe(3);
  });
});
