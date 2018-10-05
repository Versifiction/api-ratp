import React from 'react'

const Info = (props) => {
    return (
        <div className="container info">
            <hr/>
                <h3 className="text-capitalize">{props.station}</h3>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4>Direction : {props.data[0].destination}</h4>
                            <p>Prochain train : {props.data[0].message}</p>
                            <p>Suivant : {props.data[1].message}</p>
                        </div>
                        <div>
                            <h4>Direction : {props.transport === "bus" || "tramways" || "noctiliens" ? props.data[2].destination : props.data[4].destination}</h4>
                            <p>Prochain train : {props.transport === "bus" || "tramways" || "noctiliens" ? props.data[2].message : props.data[4].message}</p>
                            <p>Suivant : {props.transport === "bus" || "tramways" || "noctiliens" ? props.data[2].message : props.data[5].message}</p>
                        </div>
                    </div>
            <hr/>
        </div>
    )
}

export default Info;