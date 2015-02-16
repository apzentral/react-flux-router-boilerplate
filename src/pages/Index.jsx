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
      <div>
        <div className="page-header">
          <h1>React, Flux with Router Boilerplate</h1>
          <p className="lead">
            Basic starting point for develop web application with React and Flux.
          </p>
        </div>

        <p>We are using <a href="http://facebook.github.io/flux/" target="_blank">Flux</a> as a unidirectional data flow.</p>
        <img src="//github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png" style={{width:'100%'}}/>

        <hr/>

        <h3>Great Tutorials for React with Flux</h3>
        <ul>
          <li>
            <a href="https://scotch.io/tutorials/learning-react-getting-started-and-concepts" target="_blank">Learning React.js: Getting Started and Concepts</a>
          </li>
          <li>
            <a href="https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js" target="_blank">Build A Real-Time Twitter Stream with Node and React.js</a>
          </li>
          <li>
            <a href="https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture" target="_blank">Getting To Know Flux, the React.js Architecture</a>
          </li>
          <li>
            <a href="https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux" target="_blank">Creating A Simple Shopping Cart with React.js and Flux</a>
          </li>
          <li>
            <a href="http://blog.mimacom.com/introduction-to-react-and-flux/" target="_blank">Introduction to React and Flux</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = HomePage;
