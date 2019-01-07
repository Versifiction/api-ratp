import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

class Site extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

export default Site;