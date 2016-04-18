'use strict';

describe('Service: offices', function () {

  // load the service's module
  beforeEach(module('aulasutnApp'));

  // instantiate service
  var offices;
  beforeEach(inject(function (_offices_) {
    offices = _offices_;
  }));

  it('should do something', function () {
    expect(!!offices).toBe(true);
  });

});
