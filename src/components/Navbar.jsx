'use strict';

var React = require('react');
var Link = require('./Link');

var Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <Link className="navbar-brand row" to="/">
          React
        </Link>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link className="navbar-brand row" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navbar;
