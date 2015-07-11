/**
 * Action Type
 */

'use strict';

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({

  // Route action types
  SET_CURRENT_ROUTE: null,

  // All ToDo Actions
  TODO_ADD_REQUEST: null,
  TODO_TOGGLE_COMPLETE_REQUEST: null,
  TODO_REQUEST_DATA: null,
  TODO_ADD: null,
  TODO_TOGGLE_COMPLETE: null,
  TODO_RECEIVE_DATA: null

});
