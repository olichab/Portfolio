import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Element, Link } from 'react-scroll';
import Typelighter from './Typelighter';
import IconScroll from './IconScroll';
import ParticlesBubbles from './ParticlesBubbles';
import '../scss/Home.scss';

export default function Home() {
  return (
    <Element name='anchorHomePart'>
      <Container className='home-container'>
        <ParticlesBubbles />
        <Row className='h-100'>
          <Col className='my-auto'>
            <Row className='p-3 p-md-5'>
              <Col xs='10'>
                <h1>Hello world !</h1>
                <br />
                <p>
                  Je suis
                  <span className='text-yellow'> Olivier Chabot</span>
                  . Développeur web et web mobile.
                  <br />
                  Bienvenue sur mon portfolio.
                </p>
              </Col>
            </Row>
            <Row className='d-none d-md-block justify-content-center p-3 p-md-5'>
              <Col>
                <Typelighter />
              </Col>
            </Row>
            <Row className='justify-content-center justify-content-md-end p-md-5'>
              <Col xs='auto'>
                <Link
                  className='nav-link'
                  to='anchorContactPart'
                  smooth='easeInOutQuad'
                  duration={750}
                >
                  <button
                    type='button'
                    className='btn-yellow hvr-bounce-to-bottom'
                  >
                    Dire bonjour ...
                  </button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='d-none d-md-block'>
          <IconScroll />
        </Row>
      </Container>
    </Element>
  );
}
