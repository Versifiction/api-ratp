import React from 'react';

const Select = (props) => {
    return (
        <div className="input-group input-group-sm mb-3">
            <label htmlFor="select-control">Choisissez le mode de transport</label>
                <select 
                    id="select-control"
                    onClick={props.handleChange}
                >
                    <option value="metros" defaultValue>Cliquez puis sélectionner</option> 
                    <option value="metros" defaultValue>Métros</option> 
                    <option value="bus">Bus</option>
                    <option value="rers">Rers</option>
                    <option value="tramways">Tramways</option>
                    <option value="noctiliens">Noctiliens</option>
                </select>
            <label htmlFor="form-control">Saisissez le numéro de la ligne</label>
            <input 
                onChange={props.selectInput}
                type="text" 
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Numéro de la ligne"
            />
        </div>
    )
}

export default Select;
