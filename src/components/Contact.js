import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
import Div100vh from "react-div-100vh";
import SocialNetwork from "./SocialNetwork";
import { useViewport } from "../hooks/useViewport";
import { playTlContact } from "../timelines";

import "../scss/Contact.scss";

const Contact = () => {
  const refTitle = useRef(null);
  const refText = useRef(null);
  const refMail = useRef(null);
  const refTel = useRef(null);
  const refLocation = useRef(null);
  const { width } = useViewport();
  const breakpoint = 992;

  useEffect(() => {
    playTlContact(refTitle, refText, refMail, refTel, refLocation);
  }, []);
  return (
    <Div100vh className="contact-container">
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Restons en contact ! Vous avez une demande particulière en développement web ? N'hésitez pas à vous rapprocher de moi pour que l'on étudie ça ensemble."
        />
      </Helmet>
      {width > breakpoint && <SocialNetwork />}
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
              Si vous avez besoin de plus d&apos;informations concernant un
              projet de <b>site Internet</b>, d’
              <b>application mobile</b> ou pour toutes demandes liées au{" "}
              <b>web design</b>, n’hésitez pas à me contacter.
            </p>
          </Col>
          <Col xs="9" md="5" className="d-flex align-items-center">
            <Row className="infos-contact">
              <Col xs="12">
                <p ref={refMail}>chabot.oliv[at]gmail.com</p>
              </Col>
              <Col xs="12">
                <p ref={refTel}>06 78 55 37 94</p>
              </Col>
              <Col xs="12">
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
