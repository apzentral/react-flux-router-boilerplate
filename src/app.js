/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 * and
 * https://github.com/alduro/generator-flux-webapp
 */

'use strict';

var React = require('react');
var assign = require('react/lib/Object.assign');
var {
  Router
} = require('director');
var AppDispatcher = require('./dispatcher/AppDispatcher');
var ActionTypes = require('./constants/ActionTypes');
var AppConfig = require('./config.js');

// Pages
var IndexPage = React.createFactory(require('./pages/Index'));

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

/**
 * Check if Page component has a layout property; and if yes, wrap the page
 * into the specified layout, then mount to container in config file.
 */
function render(page) {
  var child, props = {};
  var obj = page();
  while (obj.props && obj.props.layout) {
    child = page(props, child);
    props = assign(props, obj.props);
    obj = obj.props.layout;
  }
  React.render(obj(props, child), AppConfig.container);
}

// Define URL routes
// See https://github.com/flatiron/director
var routes = {
  // Main Route
  '/': function() {
    render(IndexPage);
  }
};

// Initialize a router
var router = new Router(routes).configure({
  html5history: false
}).init('/');

// Register Main Application Dispatcher
AppDispatcher.register((payload) => {

  if (payload.actionType === ActionTypes.SET_CURRENT_ROUTE) {
    router.setRoute(payload.route);
  }

  return true; // No errors.  Needed by promise in Dispatcher.
});