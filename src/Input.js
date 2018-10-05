import React from 'react'

const Input = (props) => {
    return (
            <div className="input-group input-group-sm mb-3">
                <label htmlFor="form-control">Saisissez le nom d'une station</label>
                <input 
                    onChange={props.input} 
                    type="text" 
                    className="form-control" 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default" 
                    placeholder="Nom de la station"
                />
                <button 
                    onClick={props.button} 
                    className="btn btn-primary">Rechercher</button>
            </div>
    )
}

export default Input;