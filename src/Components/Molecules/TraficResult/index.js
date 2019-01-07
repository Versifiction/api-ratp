/* eslint-disable */
import React, { Component } from 'react';
import metros from '../../../images/metros/metros.svg';
import rers from '../../../images/rers/rers.svg';
import tramways from '../../../images/tramways/tramways.svg';
import { Container, Col, Row, Media } from 'reactstrap';

class TraficResult extends Component {
    render() {
        const { transport, data } = this.props;

        const transportImage = require(`../../../images/${transport}/${transport}.svg`);

        const lines = {
            metrosLines: ['1', '2', '3', '3bis', '4', '5', '6', '7', '7bis', '8', '9', '10', '11', '12', '13', '14'],
            rersLines: ['a', 'b', 'c', 'd', 'e'],
            tramwaysLines: ['1', '2', '3a', '3b', '5', '6', '7', '8']
        };

        const linesImages = lines[`${transport}Lines`].map((line, i) => {
            const importLineImage =  require(`../../../images/${transport}/${line}.svg`);
            return <Media object data-src="holder.js/64x64" src={ importLineImage } alt="Logo ligne métro RATP" key={i} />;
        });


        const displayTrafic = data.map((line, index) =>
            <Col xs="12" sm="12" md="6" key={line.line}>
                <Media>
                    <Media left>
                       {linesImages[index]}
                    </Media>
                    <Media body>
                        <Media heading>
                            {line.title}{line.slug === "normal" ? <i className="fas fa-check green"></i> : <i className="fas fa-times red"></i>}
                        </Media>
                        {line.message}
                    </Media>
                </Media>
            </Col>
        );
        return (
            <Container>
                {transport !== "" && <img src={ transportImage } className="mx-auto d-block trafic-transport-img" alt="Logo transport RATP" />}
                <Row className="d-flex justify-content-between">
                    {displayTrafic}
                </Row>
            </Container>
        )
    }
}

export default TraficResult;