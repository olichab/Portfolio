import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Element } from 'react-scroll';
import pictoEmail from '../assets/images/pictos/email.svg';
import pictoPhone from '../assets/images/pictos/phone.svg';
import pictoLocation from '../assets/images/pictos/location.svg';

import '../scss/Contact.scss';

export default function Projets() {
  const sendemail = event => {
    event.preventDefault();
    const body = `Nom: ${document.getElementById('name').value} \n \n ${
      document.getElementById('message').value
    }`;
    const location = `mailto:chabot.oliv@gmail.com?subject=Hello Olivier&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = location;
  };
  return (
    <Element name="anchorContactPart">
      <Container className="contact-container">
        <Row className="h-100">
          <Col className="my-auto">
            <Row className="p-3">
              <Col xs="10" md="6" lg="5">
                <h1>ME CONTACTER</h1>
                <br />
                <p>
                  N&apos;hésitez pas à me contacter pour plus
                  d&apos;informations ou que l’on démarre un projet web
                  ensemble.
                </p>
              </Col>
            </Row>
            <Row className="p-md-5">
              <Col xs="12" lg="6">
                <Row className="p-3 ml-lg-5 align-items-center justify-content-sm-center justify-content-lg-start">
                  <Col xs="auto">
                    <Media
                      object
                      src={pictoEmail}
                      alt="email"
                      className="picto-email"
                    />
                  </Col>
                  <Col xs="auto">chabot.oliv[at]gmail.com</Col>
                </Row>
                <Row className="p-3 ml-lg-5 align-items-center justify-content-sm-center justify-content-lg-start">
                  <Col xs="auto">
                    <Media
                      object
                      src={pictoPhone}
                      alt="phone"
                      className="picto-phone"
                    />
                  </Col>
                  <Col xs="auto">06 78 55 37 94</Col>
                </Row>
                <Row className="p-3 ml-lg-5 align-items-center justify-content-sm-center justify-content-lg-start">
                  <Col xs="auto">
                    <Media
                      object
                      src={pictoLocation}
                      alt="location"
                      className="picto-location"
                    />
                  </Col>
                  <Col xs="auto">Châtillon 92320, France</Col>
                </Row>
              </Col>
              <Col xs="12" lg="6">
                <form onSubmit={sendemail}>
                  <Row className="p-3 justify-content-center">
                    <Col>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                      />
                    </Col>
                  </Row>
                  <Row className="p-3 justify-content-center">
                    <Col>
                      <textarea
                        rows={4}
                        id="message"
                        type="text"
                        className="form-control"
                        placeholder="Message"
                      />
                    </Col>
                  </Row>
                  <Row className="p-3 justify-content-center">
                    <Col xs="auto">
                      <button
                        type="submit"
                        className="btn-yellow hvr-bounce-to-bottom"
                      >
                        Envoyer
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
