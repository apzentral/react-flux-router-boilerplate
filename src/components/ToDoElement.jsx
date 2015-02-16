/**
 * @jsx React.DOM
 */
'use strict';

var DEBUG = false;
var _name = 'ToDoElement.jsx';
var ToDoApi = require('../utilities/ToDoApi');
var moment = require('moment');

var React = require('react');

function getCurrentDate() {
  return moment().format('M/D/YY h:mm:ss A');
}

var ToDoElement = React.createClass({

  displayName: _name,

  getInitialState: function() {
    if (DEBUG) {
      console.log('[*] ' + _name + ':getInitialState ---');
    }
    return {
      date: getCurrentDate()
    };
  },

  render() {
    if (DEBUG) {
      console.log('[*] ' + _name + ':render ---');
      console.log(this.props);
    }
    // Set Up
    var id = this.props.data.id;
    var text = this.props.data.text;
    var complete = this.props.data.complete;
    // Mark Up
    return (<div onClick={this._toggleComplete} className={'todo-element ' + ((complete) ? 'done': '')}>
      <input type="checkbox" checked={(complete) ? 'checked': null} onChange={this._onChange}/> {text}
      <small>@ {this.state.date}</small>
    </div>);
  },

  _toggleComplete: function(e) {
    if (DEBUG) {
      console.log('[*] ' + _name + ':_toggleComplete ---');
    }
    ToDoApi.toggleCompleteById(this.props.data.id);
    this.setState({
      date: getCurrentDate()
    });
  },

  _onChange: function() {
    if (DEBUG) {
      console.log('[*] ' + _name + ':_onChange ---');
    }
  }

});

module.exports = ToDoElement;
