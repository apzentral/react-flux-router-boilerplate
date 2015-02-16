/**
 * ToDo Store
 */
'use strict';

/**
 * Libraries
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var Constants = require('../constants/ActionTypes');

/**
 * Variables
 */
var CHANGE_EVENT = 'change';
var DEBUG = false;
var _name = 'ToDoStore';

var _todo = [];

/**
 * Store Start
 */
var ToDoStore = assign({}, EventEmitter.prototype, {

  // Emit Change event
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getAllToDo: function() {
    return _todo;
  },

  setToDo: function(data) {
    _todo = data;
    return _todo;
  },

  addToDo: function(data) {
    _todo.push(data);
    return _todo[_todo.length - 1];
  },

  toggleComplete: function(index) {
    var target = null;
    for (var i in _todo) {
      var _t = _todo[i];
      if (_t.id !== index) {
        continue;
      }
      _todo[i].complete = !_todo[i].complete;
      target = _todo[i];
      break;
    }
    return target;
  }

});

/**
 * Integrated with Dispatcher
 */
AppDispatcher.register(function(payload) {

  var action = payload.actionType;

  if (DEBUG) {
    console.log('[*] ' + _name + ':Dispatch-Begin --- ' + action);
    console.log('     Payload:');
    console.log(payload);
  }

  // Route Logic
  switch (action) {

    case Constants.TODO_RECEIVE_DATA:
      ToDoStore.setToDo(payload.data);
      break;

    case Constants.TODO_TOGGLE_COMPLETE:
      ToDoStore.toggleComplete(payload.id);
      break;

    case Constants.TODO_ADD:
      ToDoStore.addToDo(payload.data);
      break;

    default:
      if (DEBUG) {
        console.log('[x] ' + _name + ':actionType --- NOT MATCH');
      }
      return true;
  }

  // If action was responded to, emit change event
  ToDoStore.emitChange();

  if (DEBUG) {
    console.log('[*] ' + _name + ':emitChange ---');
  }

  return true;
});

module.exports = ToDoStore;