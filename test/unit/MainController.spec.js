describe('MainController', function() {
  beforeEach(module('gitCoreApp'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('MainController');
  }));

  it('initializes with one user', function() {
    var gitUsers = ['Jazzy', 'Pete'];
    expect(ctrl.gitUsers).toEqual(gitUsers);
  });
});
