'use strict';

describe('Service: careers', function () {

  // load the service's module
  beforeEach(module('aulasutnApp'));

  // instantiate service
  var careers;
  beforeEach(inject(function (_careers_) {
    careers = _careers_;
  }));

  it('should do something', function () {
    expect(!!careers).toBe(true);
  });

});
