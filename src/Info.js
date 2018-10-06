import React from 'react'

const Info = (props) => {
    return (
        <div className="container">
            <hr/>
                <h3 className="text-capitalize">{props.station}</h3>
                <div className="d-flex justify-content-between row">
                    <div className="col-xs-12 col-sm-12 col-md-6 results">
                        <h4>Direction : {props.data[0].destination}</h4>
                        <h5>Prochain : {props.data[0].message}</h5>
                        {props.transport !== "rers" && 
                        <h5>Suivant : {props.data[1].message}</h5>
                        }
                    </div>
                    {props.transport === "rers" &&
                    <div className="col-xs-12 col-sm-12 col-md-6 results">
                        <h4>Direction : {props.data[1].destination}</h4>
                        <h5>Prochain : {props.data[1].message}</h5>
                    </div>}
                    {props.data.length !== 2 &&
                    <div className="col-xs-12 col-sm-12 col-md-6 results">
                        <h4>Direction : {props.transport === "metros" && props.data[4].destination
                        || props.transport === "bus" && props.data[2].destination
                        || props.transport === "tramways" && props.data[2].destination
                        || props.transport === "noctiliens" && props.data[2].destination 
                        || props.transport === "rers" && props.data[6].destination}</h4>
                        <h5>Prochain : {props.transport === "metros" && props.data[4].message
                        || props.transport === "bus" && props.data[2].message
                        || props.transport === "tramways" && props.data[2].message
                        || props.transport === "noctiliens" && props.data[2].message
                        || props.transport === "rers" && props.data[6].message}</h5>
                        {props.transport !== "rers" && 
                        <h5>Suivant : {props.transport === "metros" && props.data[5].message
                        || props.transport === "bus" && props.data[3].message
                        || props.transport === "tramways" && props.data[3].message
                        || props.transport === "noctiliens" && props.data[3].message
                        || props.transport === "rers" && props.data[6].message}</h5>
                        }
                    </div>                            
                    }
                    {props.transport === "rers" &&
                    <div className="col-xs-12 col-sm-12 col-md-6 results">
                        <h4>Direction : {props.data[7].destination}</h4>
                        <h5>Prochain : {props.data[7].message}</h5>
                    </div>
                    }
                </div>
            <hr/>
        </div>
    )
}

export default Info;