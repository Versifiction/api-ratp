/* eslint-disable */
import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class HorairesResult extends Component {
    render() {
        const { data, station, transport } = this.props;
        return (
            <Container>
                <h3 className="text-capitalize">{station}</h3>
                <Row className="d-flex justify-content-between">
                    <Col xs="12" sm="12" md="6" className="results">
                        <h4>Direction : {data[0].destination}</h4>
                        <h5>Prochain : {data[0].message}</h5>
                        {transport !== "rers" &&
                        <h5>Suivant : {data[1].message}</h5>
                        }
                    </Col>
                    {transport === "rers" &&
                        <Col xs="12" sm="12" md="6" className="results">
                            <h4>Direction : {data[1].destination}</h4>
                            <h5>Prochain : {data[1].message}</h5>
                        </Col>}
                    {data.length !== 2 &&
                        <Col xs="12" sm="12" md="6" className="results">
                            <h4>Direction : {transport === "metros" && data[4].destination
                            || transport === "bus" && data[2].destination
                            || transport === "tramways" && data[2].destination
                            || transport === "noctiliens" && data[2].destination
                            || transport === "rers" && data[6].destination}
                            </h4>
                            <h5>Prochain : {transport === "metros" && data[4].message
                            || transport === "bus" && data[2].message
                            || transport === "tramways" && data[2].message
                            || transport === "noctiliens" && data[2].message
                            || transport === "rers" && data[6].message}
                            </h5>
                            {transport !== "rers" &&
                                <h5>Suivant : {transport === "metros" && data[5].message
                                || transport === "bus" && data[3].message
                                || transport === "tramways" && data[3].message
                                || transport === "noctiliens" && data[3].message
                                || transport === "rers" && data[6].message}
                                </h5>
                            }
                        </Col>
                    }
                    {transport === "rers" &&
                    <Col xs="12" sm="12" md="6" className="results">
                        <h4>Direction : {data[7].destination}</h4>
                        <h5>Prochain : {data[7].message}</h5>
                    </Col>
                    }
                </Row>
            </Container>
        )
    }
}

export default HorairesResult;