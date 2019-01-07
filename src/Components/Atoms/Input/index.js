import React, { Component } from 'react';
import Datalist from '../Datalist';

import '../../../css/Input.css';

class Input extends Component {
    render() {
        const { datalist, json, func, label, transport, placeholder, handleChange, name, type } = this.props;

        return (
            <div className="input-group input-group-sm mb-3">
                <label htmlFor="form-control">{label}</label>
                <input
                    onChange={transport !== "" ? transport : handleChange}
                    onClick={func}
                    type="text"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder={placeholder}
                    list={datalist}
                    name={name}
                    //eslint-disable-next-line
                    type={type}
                />
                {datalist !== "none" &&
                    <Datalist
                        datalist={datalist}
                        json={json}
                    />
                }
            </div>
        )
    }
}

export default Input;