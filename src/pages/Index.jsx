/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var HomePage = React.createClass({
  displayName: 'Index.jsx',
  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },
  render: function() {
    return (
      <div className="page-header">
        <h1>React, Flux with Router Boilerplate</h1>
        <p className="lead">
          Basic starting point for develop web application with React and Flux.
        </p>
      </div>
    );
  }
});

module.exports = HomePage;
