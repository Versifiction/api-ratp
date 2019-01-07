/* eslint-disable */
import React, { Component } from 'react';
import metros from '../../../images/metros/metros.svg';
import rers from '../../../images/rers/rers.svg';
import tramways from '../../../images/tramways/tramways.svg';
import { Container, Col, Row, Media, ListGroup, ListGroupItem } from 'reactstrap';

class StationsResult extends Component {
    render() {
        const { transport, data, line } = this.props;

        const transportImage = require(`../../../images/${transport}/${line}.svg`);

        const displayStations = data.map((station) =>
            <ListGroupItem key={station.slug}>
                {station.name}
            </ListGroupItem>
        );
        return (
            <Container>
                {transport !== "" && <img src={ transportImage } className="mx-auto d-block trafic-transport-img" alt="Logo transport RATP" />}
                <Row className="d-flex justify-content-between">
                    <Col xs="12" sm="12" md="12">
                        <ListGroup>
                            {displayStations}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default StationsResult;