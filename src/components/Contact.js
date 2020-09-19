import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Div100vh from "react-div-100vh";
import pictoEmail from "../assets/images/pictos/email.svg";
import pictoPhone from "../assets/images/pictos/phone.svg";
import pictoLocation from "../assets/images/pictos/location.svg";

import "../scss/Contact.scss";

export default function Projets() {
  return (
    <Div100vh className="container contact-container" id="contact">
      <Row className="p-3 p-md-3">
        <Col xs="10" md="6" lg="5">
          <h1>ME CONTACTER</h1>
          <br />
          <p>
            N&apos;hésitez pas à me contacter pour plus d&apos;informations ou
            que l’on démarre un projet web ensemble.
          </p>
        </Col>
      </Row>
      <Row className="m-4 m-xl-5">
        <Col xs="auto" lg="6" className="mx-auto">
          <Row className="p-3 ml-lg-5 align-items-center justify-content-lg-start">
            <Col xs="auto">
              <Media
                object
                src={pictoEmail}
                alt="email"
                className="picto-email"
              />
            </Col>
            <Col xs="auto">
              <p>chabot.oliv[at]gmail.com</p>
            </Col>
          </Row>
          <Row className="p-3 ml-lg-5 align-items-center justify-content-lg-start">
            <Col xs="auto">
              <Media
                object
                src={pictoPhone}
                alt="phone"
                className="picto-phone"
              />
            </Col>
            <Col xs="auto">
              <p>06 78 55 37 94</p>
            </Col>
          </Row>
          <Row className="p-3 ml-lg-5 align-items-center justify-content-lg-start">
            <Col xs="auto">
              <Media
                object
                src={pictoLocation}
                alt="location"
                className="picto-location"
              />
            </Col>
            <Col xs="auto">
              <p>Châtillon 92320, France</p>
            </Col>
          </Row>
        </Col>
        <Col xs="12" lg="6" className="d-none d-md-block">
          <form action="https://formspree.io/xrgqldkl" method="POST">
            <Row className="p-3 justify-content-center">
              <Col>
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  placeholder="Votre email"
                  required
                />
              </Col>
            </Row>
            <Row className="p-3 justify-content-center">
              <Col>
                <textarea
                  rows={4}
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  required
                />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
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
    </Div100vh>
  );
}
