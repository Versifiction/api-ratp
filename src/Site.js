import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

class Site extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    );
  }
}

export default Site;