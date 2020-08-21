import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Routing
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    console.log('App Mounted');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default App;
