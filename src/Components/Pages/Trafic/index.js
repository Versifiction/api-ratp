import React, { Component } from 'react';

import Navigation from '../../Molecules/Navigation';
import TraficContent from '../../Molecules/TraficContent';

class Trafic extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Trafic | Api RATP";
  }

  render() {
    return (
      <div id="trafic">
        <div className="container">
          <div className="page">
            <Navigation />
            <TraficContent title="Trafic" />
          </div>
        </div>
      </div>
    );
  }
}

export default Trafic;