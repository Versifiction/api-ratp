import React, { Component } from 'react';
import '../../../css/Select.css';

class Select extends Component  {
    render() {
        const transportsArray = [
            {
                "lowcase": "metros", "capitalize": "Métros"
            },
            {
                "lowcase": "bus", "capitalize": "Bus"
            },
            {
                "lowcase": "rers", "capitalize": "Rers"
            },
            {
                "lowcase": "tramways", "capitalize": "Tramways"
            },
            {
                "lowcase": "noctiliens", "capitalize": "Noctiliens"
            },
        ];

        const traficTransportsArray = [
            {
                "lowcase": "metros", "capitalize": "Métros"
            },
            {
                "lowcase": "rers", "capitalize": "Rers"
            },
            {
                "lowcase": "tramways", "capitalize": "Tramways"
            },
        ];

        const displayTransports = transportsArray.map((transport, i) => {
            return <option key={i} value={transport.lowcase}>{transport.capitalize}</option>
        });

        const displayTraficTransports = traficTransportsArray.map((transport, i) => {
            return <option key={i} value={transport.lowcase}>{transport.capitalize}</option>
        });

        return (
            <div className="input-group input-group-sm mb-3">
                <label htmlFor="select-control">{this.props.label}</label>
                <select
                    id="select-control"
                    onClick={this.props.handleChange}
                >
                    <option value="" defaultValue>Cliquez puis choisir</option>
                    {this.props.id === "trafic-transports" ? displayTraficTransports : displayTransports}
                </select>
            </div>
        )
    }
}

export default Select;
