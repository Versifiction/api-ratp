import React, { Component } from 'react';

import Navigation from '../../Molecules/Navigation';
import HorairesContent from '../../Molecules/HorairesContent';

class Horaires extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Horaires | Api RATP";
    }

    render () {
        return (
            <div id="horaires">
                <div className="container">
                    <div className="page">
                        <Navigation />
                        <HorairesContent title="Horaires"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Horaires;