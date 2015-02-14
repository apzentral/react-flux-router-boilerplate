/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Link = React.createFactory(require('./Link'));

var Navbar = React.createClass({
  displayName: 'Navbar.jsx',
  render() {
    return (
      <nav className="navbar navbar-inverse">
        {Link({
          className: 'navbar-brand',
          to: '/'
        }, 'React')}
        <ul className="nav navbar-nav">
          <li className="active">
            {Link({
              to: '/'
            }, 'Home')}
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navbar;
