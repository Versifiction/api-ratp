import React, { Component } from 'react';

import Navigation from '../../Molecules/Navigation';
import AccueilContent from '../../Molecules/AccueilContent';

class Accueil extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Accueil | Api RATP";
  }

  render() {
    return (
        <div id="accueil">
            <div className="container">
                <div className="page">
                    <Navigation />
                    <AccueilContent title="Accueil" />
                </div>
            </div>
        </div>
    );
  }
}

export default Accueil;