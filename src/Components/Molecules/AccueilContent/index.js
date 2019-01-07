import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/App.css';

class AccueilContent extends Component {
    render () {
        return (
            <div className="content">
                <Link to="/horaires" href="/horaires">
                    <div className="accueil-horaires accueil-bloc">
                        <h2>Consulter les horaires de passage à une station</h2>
                    </div>
                </Link>
                <Link to="/stations" href="/stations">
                    <div className="accueil-stations accueil-bloc">
                        <h2>Voir la liste des stations d'une ligne</h2>
                    </div>
                </Link>
                <Link to="/trafic" href="/trafic">
                    <div className="accueil-trafic accueil-bloc">
                        <h2>Vérifier l'état du trafic</h2>
                    </div>
                </Link>
                <Link to="/plans" href="/plans">
                    <div className="accueil-plans accueil-bloc">
                        <h2>Regarder les plans des transports</h2>
                    </div>
                </Link>
            </div>
        )
    }
}

export default AccueilContent;