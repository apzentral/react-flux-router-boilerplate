/**
 * ToDo API
 */
'use strict';
var DEBUG = false;
var _name = 'ToDoApi.js';
var ToDoResponseActions = require('../actions/ToDoResponseActions');
var ToDoData = require('./ToDoData');

module.exports = {

  // Load mock ToDo data from localStorage
  initToDoData: function() {
    ToDoData.init();
    var data = JSON.parse(localStorage.getItem('todo'));
    if (DEBUG) {
      console.log('[*] ' + _name + ':initToDoData --- ');
      console.log(data);
    }
    ToDoResponseActions.receiveToDo(data);
  },

  toggleCompleteById: function(id) {
    var todos = JSON.parse(localStorage.getItem('todo'));
    todos.forEach(function(todo) {
      if (todo.id === id) todo.complete = !todo.complete;
      return todo;
    });
    localStorage.setItem('todo', JSON.stringify(todos));
    ToDoResponseActions.toggleComplete(id);
  },

  addNewToDo: function(data) {
    var todos = JSON.parse(localStorage.getItem('todo'));
    todos.push(data);
    localStorage.setItem('todo', JSON.stringify(todos));
    ToDoResponseActions.addToDo(data);
  }

};
