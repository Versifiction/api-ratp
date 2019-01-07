import React, { Component } from 'react';

import Navigation from '../../Molecules/Navigation';
import PlansContent from '../../Molecules/PlansContent';

class Plans extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Plans | Api RATP";
  }

  render() {
    return (
      <div id="plans">
        <div className="container">
          <div className="page">
            <Navigation />
            <PlansContent title="Plans" />
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;