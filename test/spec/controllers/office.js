'use strict';

describe('Controller: OfficeCtrl', function () {

  // load the controller's module
  beforeEach(module('aulasutnApp'));

  var OfficeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OfficeCtrl = $controller('OfficeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OfficeCtrl.awesomeThings.length).toBe(3);
  });
});
