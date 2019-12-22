import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Element } from 'react-scroll';
import photo from '../assets/images/Photo_OC.jpg';

import '../scss/Bio.scss';

export default function Bio() {
  return (
    <Element name="anchorBioPart">
      <Container className="bio-container">
        <Row className="p-5">
          <Col>
            <h1>BIO</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" lg="4" className="my-auto presentaion-text">
            <p>
              Je m’appelle Olivier Chabot, j’ai 28 ans. Je suis diplômé de l’IUT
              de Vélizy-Villacoublay en Métiers du Multimédia et de l’Internet.
              Après des études en infographie 3D et avoir excercé dans ce
              domaine, j’ai décidé, quelques années plus tard, de renouer avec
              ma première passion: le développement web.
            </p>
          </Col>
          <Col xs="12" lg="4" className="my-auto presentation-photo">
            <Media
              object
              src={photo}
              alt="photo olivier chabot"
              className="photo"
            />
          </Col>
        </Row>
        <Row className="p-5">
          <Col>
            <h1>COMPÉTENCES</h1>
          </Col>
        </Row>
        <Row className=" justify-content-center">
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
          <Col xs="6" md="4" lg="3" className="p-3">
            <Media object src="https://via.placeholder.com/150" />
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
