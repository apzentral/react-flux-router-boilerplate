/**
 * Default Layout
 */

'use strict';

var React = require('react');
var Navbar = require('../components/Navbar');

var DefaultLayout = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = DefaultLayout;
