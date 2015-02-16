/**
 * ToDo API
 */
'use strict';
var DEBUG = false;
var _name = 'ToDoApi.js';
var ToDoActions = require('../actions/ToDoActions');
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
    ToDoActions.receiveToDo(data);
  },

  toggleCompleteById: function(id) {
    ToDoActions.toggleComplete(id);
  },

  addNewToDo: function(data) {
    ToDoActions.addToDo(data);
  }

};