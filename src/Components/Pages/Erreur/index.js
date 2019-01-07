import React, { Component } from 'react';

import Navigation from '../../Molecules/Navigation';
import ErreurContent from '../../Molecules/ErreurContent';

class Erreur extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Erreur | Api RATP";
  }

  render() {
    return (
      <div id="erreur">
        <div className="container">
          <div className="page">
            <Navigation />
            <ErreurContent title="404" />
          </div>
        </div>
      </div>
    );
  }
}

export default Erreur;