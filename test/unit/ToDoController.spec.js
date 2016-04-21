describe('ToDoController', function() {
  beforeEach(module('toDoApp'));
  it('initialises with a toDo', function() {
    expect(ctrl.todo).toEqual("ToDo1");
  });
  var ctrl;
  beforeEach(inject(function() {
    ctrl = ('ToDoController');
  }));
});
