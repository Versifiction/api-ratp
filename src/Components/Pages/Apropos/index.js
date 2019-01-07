import React, { Component } from 'react';

import Navigation from '../../Molecules/Navigation';
import AproposContent from '../../Molecules/AproposContent';

class Apropos extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "À propos | Api RATP";
  }

  render() {
    return (
      <div id="a-propos">
        <div className="container">
          <div className="page">
            <Navigation />
            <AproposContent title="À propos" />
          </div>
        </div>
      </div>
    );
  }
}

export default Apropos;