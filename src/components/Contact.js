import React from "react";
import { Row, Col } from "reactstrap";
import Div100vh from "react-div-100vh";
import pictoEmail from "../assets/images/pictos/email.svg";
import pictoPhone from "../assets/images/pictos/phone.svg";
import pictoLocation from "../assets/images/pictos/location.svg";
import "../scss/Contact.scss";

export default function Projets() {
  return (
    <Div100vh className="container contact-container " id="contact">
      <Row className="">
        <Col xs="12">
          <Row className="justify-content-center align-items-end offset-lg-1">
            <Col xs="9" md="6" lg="4">
              <h1>ME CONTACTER</h1>
              <br />
              <p>
                N&apos;hésitez pas à me contacter pour plus d&apos;informations
                ou que l’on démarre un projet web ensemble.
              </p>
            </Col>
            <Col xs="8" md="5" lg="4" className="mt-5">
              <Row>
                <Col xs="12" className="ml-md-5">
                  <img
                    src={pictoEmail}
                    alt="picto email"
                    className="picto-email"
                  />
                  <p>chabot.oliv[at]gmail.com</p>
                </Col>
                <Col xs="12" className="ml-md-5">
                  <img
                    src={pictoPhone}
                    alt="picto telephone"
                    className="picto-phone"
                  />
                  <p>06 78 55 37 94</p>
                </Col>
                <Col xs="12" className="ml-md-5">
                  <img
                    src={pictoLocation}
                    alt="picto location"
                    className="picto-location"
                  />
                  <p>Châtillon 92320, France</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-lg-block">
          <Row className="mt-5 offset-lg-1">
            <Col lg="7" className="offset-lg-2">
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
                    <input
                      type="text"
                      name="_gotcha"
                      style={{ display: "none" }}
                    />
                  </Col>
                </Row>
                <Row className="p-3 justify-content-center">
                  <Col xs="auto">
                    <button
                      type="submit"
                      className="btn-yellow hvr-sweep-to-bottom"
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
    </Div100vh>
  );
}
