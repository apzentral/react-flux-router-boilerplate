/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 * and
 * https://github.com/alduro/generator-flux-webapp
 */

'use strict';

var React = require('react');
var copyProperties = require('react/lib/copyProperties');
var Router = require('director');
var AppDispatcher = require('./dispatcher/AppDispatcher');
var ActionTypes = require('./constants/ActionTypes');
var AppConfig = require('./config');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

/**
 * Check if Page component has a layout property; and if yes, wrap the page
 * into the specified layout, then mount to document.body.
 */
function render(page) {
  var child, props = {};
  while (page.defaultProps.layout) {
    child = page(props, child);
    copyProperties(props, page.defaultProps);
    page = page.defaultProps.layout;
  }
  React.renderComponent(page(props, child), document.body);
  document.title = props.title;
}

// Define URL routes
// See https://github.com/flatiron/director
var routes = {
  // Main Route
  '/': () => render(
    require('./pages/Index');
  )
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