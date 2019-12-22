import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../scss/Footer.scss';

export default function Footer() {
  return (
    <Container className="footer-container" fluid>
      <Row className="h-100">
        <Col className="my-auto">
          <Row className="justify-content-center text-center">
            <Col>
              Tous droits reservés &copy; 2019 ∙ Powered by Olivier Chabot ∙
              <a
                href="https://github.com/olichab"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Github
              </a>{' '}
              ∙{' '}
              <a
                href="https://www.linkedin.com/in/olichab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linked in
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
