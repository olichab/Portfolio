import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../scss/Footer.scss';

export default function Footer() {
  return (
    <Container className='footer-container' fluid>
      <Row className='justify-content-center text-center'>
        <Col>
          Tous droits reservés &copy; 2020 ∙ Powered by Olivier Chabot ∙{' '}
          <a
            href='https://github.com/olichab'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>{' '}
          ∙{' '}
          <a
            href='https://www.linkedin.com/in/olichab'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linked in
          </a>{' '}
          ∙{' '}
          <a
            href='https://www.codewars.com/users/olichab'
            target='_blank'
            rel='noopener noreferrer'
          >
            Codewars
          </a>
        </Col>
      </Row>
    </Container>
  );
}
