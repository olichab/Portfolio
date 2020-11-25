import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../scss/Footer.scss";

export default function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col xs="12">
          Tous droits reservés &copy; 2020 ∙ Powered by Olivier Chabot
        </Col>
        <Col xs="12">
          <a
            href="https://github.com/olichab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          ∙{" "}
          <a
            href="https://www.linkedin.com/in/olichab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked in
          </a>{" "}
          ∙{" "}
          <a
            href="https://www.instagram.com/devandco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </Col>
      </Row>
    </Container>
  );
}
