import React, { Component } from 'react';
import '../../../css/App.css';

class AproposContent extends Component {
    render () {
        return (
            <div className="content">
                <h1 className="text-center">{this.props.title}</h1>
                <p>Ce site ainsi que son développeur ne sont pas affiliés à la RATP.</p>
                <p>Pour signaler un ou plusieurs bugs rencontrés, n'hésitez pas à contacter le développeur du site à l'adresse suivante : <a href="mailto:marc_charpentier@hotmail.fr">marc_charpentier@hotmail.fr</a></p>
            </div>
        )
    }
}

export default AproposContent;