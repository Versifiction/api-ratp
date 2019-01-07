import React, { Component } from 'react';

import '../../../css/Input.css';

class Input extends Component {
    render() {
        const { datalist, json } = this.props;

        const displayDatalist = json.map((line, index) =>
            <option value={datalist === "ligne" ? line.code : line.name} key={index}></option>
        );

        return (
            <div className="input-group input-group-sm mb-3">
                <datalist id={datalist}>
                    {displayDatalist}
                </datalist>
            </div>
        )
    }
}

export default Input;