import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Routing
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Admin from '../Admin/Admin.jsx';

class App extends Component {
  componentDidMount() {
    console.log('App Mounted');
  }

  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          {/* <Route path="/" render={ props => ( 
            <Feeling handleChangeFor={this.handleChangeFor} {...props} /> )} /> */}
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supporting" component={Supported} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
