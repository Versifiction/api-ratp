import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import erreur from '../../../images/erreur.png';
import '../../../css/App.css';

class ErreurContent extends Component {
    render () {
        return (
            <div className="content">
                <h1 className="text-center">{this.props.title}</h1>
                <p>Oups, cette page n'est malheureusement pas disponible !</p>
                <p><u><a href="javascript:history.back()"> « Revenir à la page précédente</a></u></p>
                <p><u><Link href="/" to="/"> « Revenir à l'accueil</Link></u></p>
                <img src={ erreur } alt="Lapin RATP" className="img-responsive w-100" />
            </div>
        )
    }
}

export default ErreurContent;