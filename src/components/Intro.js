import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";
import Typelighter from "./Typelighter";
import IconScroll from "./IconScroll";
import ParticlesBubbles from "./ParticlesBubbles";
import "../scss/Intro.scss";

export default function Home() {
  return (
    <Container className='intro-container' id='home'>
      <Row className='d-none d-lg-block'>
        <ParticlesBubbles />
      </Row>
      <Row className='p-md-3 p-xl-5'>
        <Col xs='10'>
          <h1>Hello world !</h1>
          <br />
          <h2>
            Je suis <b>Olivier Chabot</b>
            . Développeur front-end.
            <br />
            Bienvenue sur mon portfolio.
          </h2>
        </Col>
      </Row>
      <Row className='d-none d-lg-block justify-content-center p-md-3 p-xl-5'>
        <Col>
          <Typelighter />
        </Col>
      </Row>
      <Row className='justify-content-center justify-content-md-end p-3 p-xl-5'>
        <Col xs='auto'>
          <Link className='nav-link' to='/#contact' smooth='true'>
            <button type='button' className='btn-yellow hvr-bounce-to-bottom'>
              Dire bonjour
            </button>
          </Link>
        </Col>
      </Row>
      <Row>
        <IconScroll />
      </Row>
    </Container>
  );
}
