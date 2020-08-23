import React, { Component } from 'react';
import './App.css';

// Routing
import { HashRouter as Router, Route } from 'react-router-dom'
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';
import Admin from '../Admin/Admin.jsx';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Help us help you!</i></h4>
          </header>
          <br/>
          {/* <Route path="/" render={ props => ( 
            <Feeling handleChangeFor={this.handleChangeFor} {...props} /> )} /> */}
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supporting" component={Supported} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/success" component={Success} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
