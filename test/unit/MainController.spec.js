describe('MainController', function() {
  beforeEach(module('gitCoreApp'));
  it('initialises with a toDo', function() {
    expect(ctrl.todo).toEqual("ToDo1");
  });
  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('MainController');
  }));

  
});
