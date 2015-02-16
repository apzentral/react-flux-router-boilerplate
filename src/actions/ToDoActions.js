/**
 * ToDo Actions
 */
'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionTypes');

module.exports = {
  // Receive inital ToDo data
  receiveToDo: function(data) {
    AppDispatcher.handleToDoAction({
      actionType: ActionConstants.TODO_RECEIVE_DATA,
      data: data
    });
  },
  // Add a new ToDo data
  addToDo: function(data) {
    AppDispatcher.handleToDoAction({
      actionType: ActionConstants.TODO_ADD,
      data: data
    });
  },
  // Mark ToDo as complete
  toggleComplete: function(id) {
    AppDispatcher.handleToDoAction({
      actionType: ActionConstants.TODO_TOGGLE_COMPLETE,
      id: id
    });
  }
};