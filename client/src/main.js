import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import App from './App';
import DisplayInfo from './components/display-info';

class Main extends Component {

  render() {
    return (
      <div className="main">
      <BrowserRouter>
          <div>
            <Route exact path="/" component={App}/> 
            <Route exact path="/moreinfo" component={DisplayInfo}/>
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default connect()(Main)
