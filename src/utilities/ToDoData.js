/**
 * Example of API Mock Data
 */
'use strict';

var initTodoDataJson = JSON.stringify([{
  id: 1,
  text: 'React is awesome!',
  complete: false
}, {
  id: 2,
  text: 'Flux is amazing!',
  complete: false
}, {
  id: 3,
  text: 'Simple ToDo App Example',
  complete: true
}]);

module.exports = {
  // Load Mock ToDo Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('todo', initTodoDataJson);
  }
};