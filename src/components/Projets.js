import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Element } from 'react-scroll';

import '../scss/Projets.scss';

export default function Projets() {
  return (
    <Element name="anchorProjetsPart">
      <Container className="projets-container">
        <Row className="p-5">
          <Col>
            <h1>PROJETS</h1>
          </Col>
        </Row>
        <Row className=" justify-content-center">
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
          <Col xs="12" lg="6" className="p-3">
            <Media object src="https://via.placeholder.com/300" />
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
