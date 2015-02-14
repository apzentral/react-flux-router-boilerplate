/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var Libraries = React.createClass({
  displayName: 'Libraries.jsx',
  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },
  render: function() {
    return (
      <div>
        <div className="page-header">
          <h1>Libraries</h1>
          <p className="lead">
            What libraries are we using?
          </p>
        </div>
        <ul>
          <li>
            <a href="http://facebook.github.io/flux/" target="_blank">Flux</a>
          </li>
          <li>
            <a href="http://facebook.github.io/react/" target="_blank">React</a>
          </li>
          <li>
            <a href="https://github.com/flatiron/director" target="_blank">director</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Libraries;
