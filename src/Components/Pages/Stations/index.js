import React, { Component } from 'react';

import Navigation from '../../Molecules/Navigation';
import StationsContent from '../../Molecules/StationsContent';

class Stations extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Stations | Api RATP";
  }

  render() {
    return (
      <div id="stations">
        <div className="container">
          <div className="page">
            <Navigation />
            <StationsContent title="Stations" />
          </div>
        </div>
      </div>
    );
  }
}

export default Stations;