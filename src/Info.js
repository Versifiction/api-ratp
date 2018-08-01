import React from 'react'

const Info = (props) => {
    return (
        <div className="container info">
            <hr/>
                <h3>{props.station}</h3>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4>Direction : {props.data[0].destination}</h4>
                            <p>Prochain train : {props.data[0].message}</p>
                            <p>Suivant : {props.data[1].message}</p>
                        </div>
                        <div>
                            <h4>Direction : {props.data[4].destination}</h4>
                            <p>Prochain train :{props.data[4].message}</p>
                            <p>Suivant : {props.data[5].message}</p>
                        </div>
                    </div>
            <hr/>
        </div>
    )
}

export default Info;