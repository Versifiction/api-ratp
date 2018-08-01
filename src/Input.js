import React from 'react'

const Input = (props) => {
    return (
            <div className="input-group input-group-sm mb-3">
                <label htmlFor="form-control">Saisissez le nom d'une station</label>
                <input onChange={props.input} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Entrez le nom d'une station"/>
                <button onClick={props.btnF} className="btn btn-primary">Rechercher</button>
            </div>
    )
}

export default Input;