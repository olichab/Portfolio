import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Div100vh from "react-div-100vh";
import { playTlContact } from "../timelines";

import "../scss/Contact.scss";

const Contact = () => {
  const refTitle = useRef(null);
  const refText = useRef(null);
  const refMail = useRef(null);
  const refTel = useRef(null);
  const refLocation = useRef(null);
  useEffect(() => {
    playTlContact(refTitle, refText, refMail, refTel, refLocation);
  }, []);
  return (
    <Div100vh className="contact-container" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col xs="9" md="10" lg="9" className="offset-lg-1">
            <h1 ref={refTitle}>Restons en contact</h1>
          </Col>
          <Col
            xs="9"
            md="5"
            lg="4"
            className="d-flex align-items-center offset-lg-1"
          >
            <p ref={refText}>
              N&apos;hésitez pas à me contacter pour plus d&apos;informations ou
              que l’on démarre un projet web ensemble.
            </p>
          </Col>
          <Col xs="9" md="5" className="d-flex align-items-center">
            <Row className="infos-contact">
              <Col xs="12" className="p-2">
                <p ref={refMail}>chabot.oliv[at]gmail.com</p>
              </Col>
              <Col xs="12" className="p-2">
                <p ref={refTel}>06 78 55 37 94</p>
              </Col>
              <Col xs="12" className="p-2">
                <p ref={refLocation}>Châtillon 92320, France</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Div100vh>
  );
};

export default Contact;
