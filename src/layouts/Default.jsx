/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Navbar = React.createFactory(require('../components/Navbar'));

var DefaultLayout = React.createClass({
  displayName: 'Default.jsx',
  getDefaultProps() {
    return {};
  },
  render() {
    return (
      <div className="row">
        {Navbar()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = DefaultLayout;
