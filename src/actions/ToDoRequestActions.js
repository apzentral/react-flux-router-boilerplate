/**
 * ToDo Actions
 */
'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionTypes');
var ToDoApi = require('../utilities/ToDoApi');

module.exports = {
  toggleComplete: function(id) {
    AppDispatcher.handleToDoAction({
      actionType: ActionConstants.TODO_TOGGLE_COMPLETE_REQUEST,
      id: id
    });
    ToDoApi.toggleCompleteById(id);
  },
  addNewTodo: function(data) {
    AppDispatcher.handleToDoAction({
      actionType: ActionConstants.TODO_ADD_REQUEST,
      data: data
    });
    ToDoApi.addNewToDo(data);
  },
  fetchTodos: function() {
    AppDispatcher.handleToDoAction({
      actionType: ActionConstants.TODO_REQUEST_DATA,
    });
    ToDoApi.initToDoData();
  }
};
