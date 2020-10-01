import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";
import Div100vh from "react-div-100vh";
import ParticlesBubbles from "./ParticlesBubbles";
import IconScroll from "./IconScroll";
import resume from "../assets/docs/CV_Olivier_Chabot.pdf";
import pictoDownload from "../assets/images/pictos/download.svg";
import "../scss/Intro.scss";

export default function Home() {
  return (
    <Div100vh id="home" className="container intro-container">
      <span className="d-none d-lg-block">
        <ParticlesBubbles />
      </span>
      <Container>
        <Row className="justify-content-center">
          <Col xs="11" md="10" lg="8">
            <h1 className="welcome-title">Welcome</h1>
            <div className="text-intro">
              <p>
                Je suis
                <b className="word-yellow"> Olivier Chabot</b>
                .
                <br />
                Développeur front-end.
                <br />
                Bienvenue sur mon
                <span className="word-yellow"> portfolio</span>.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="buttons-row justify-content-center">
          <Col
            xs="12"
            md="10"
            lg="8"
            className=" d-flex justify-content-center justify-content-md-end"
          >
            <button type="button" className="btn-yellow hvr-icon-hang">
              <a href={resume} download className="link-unstyled">
                CV
                <img
                  src={pictoDownload}
                  className="hvr-icon"
                  alt="picto download"
                />
              </a>
            </button>
            <Link className="link-unstyled" to="/#projets" smooth="true">
              <button type="button" className="btn-yellow hvr-sweep-to-bottom">
                Voir les projets
              </button>
            </Link>
          </Col>
        </Row>
        <IconScroll />
      </Container>
    </Div100vh>
  );
}
