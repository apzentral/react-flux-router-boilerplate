/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var RouteActions = require('../actions/RouteActions');
var assign = require('react/lib/Object.assign');

var Link = React.createClass({
  displayName: 'Link.jsx',
  propTypes: {
    to: React.PropTypes.string.isRequired
  },
  render() {
    this.props.href =
      this.props.to && this.props.to.lastIndexOf('/', 0) === 0 ?
      this.props.to : '/' + this.props.to;
    return React.createElement('a', this.props, this.props.children);
  },
  handleClick(e) {
    e.preventDefault();
    RouteActions.setRoute(this.props.to);
  }
});

module.exports = Link;
