/*
 * A singleton that operates as the central hub for application updates.
 * For more information visit https://facebook.github.io/flux/
 */

'use strict';

var Flux = require('flux');
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Flux.Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction: function(action) {
    this.dispatch(action);
  },

  /**
   * ToDo Handler
   */
  handleToDoAction: function(action) {
    this.dispatch(action);
  }

});

module.exports = AppDispatcher;