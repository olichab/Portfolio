import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";
import ParticlesBubbles from "./ParticlesBubbles";
import Projet from "./Projet";
import IconScroll from "./IconScroll";
import thumbnailBOL from "../assets/images/projets/Thumbnails/Web/Thumbnail_BriefOnline.jpg";
import thumbnaiHelloWorld from "../assets/images/projets/Thumbnails/Web/Thumbnail_HelloWorld.jpg";
import thumbnailMooviz from "../assets/images/projets/Thumbnails/Web/Thumbnail_Mooviz.jpg";
import resume from "../assets/docs/CV_Olivier_Chabot.pdf";
import "../scss/Intro.scss";

export default function Home() {
  return (
    <Container className="intro-container" id="home">
      <Row className="d-none d-lg-block">
        <ParticlesBubbles />
      </Row>
      <Container className="all-part">
        <Col xs="12" lg="4" xl="5">
          <Row className="left-part">
            <Col xs="auto">
              <h1 className="welcome-title">WELCOME</h1>
              <p>
                Je suis <b>Olivier Chabot</b>
                .
                <br />
                Développeur front-end.
                <br />
                Bienvenue sur mon portfolio.
              </p>
              <a
                href={resume}
                download
                className="btn-download-resume hvr-sweep-to-right"
              >
                Télécharger mon CV
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs="12" lg="8" xl="7" className="right-part p-0 pl-lg-5">
          <Row>
            <Col xs="12">
              <h2 className="last-roject-title">Mes derniers projets</h2>
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col xs="6" xl="4">
              <Projet
                thumbnail={thumbnailBOL}
                title="Brief Online"
                location="Altavia Connect"
              />
            </Col>
            <Col xs="6" xl="4">
              <Projet
                thumbnail={thumbnailMooviz}
                title="Mooviz"
                location="Projet personnel"
              />
            </Col>
            <Col xs="6" xl="4" className="d-none d-xl-block">
              <Projet
                thumbnail={thumbnaiHelloWorld}
                title="Hello World"
                location="Wild Code School"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Link className="nav-link" to="/#projets" smooth="true">
                <button
                  type="button"
                  className="btn-yellow hvr-bounce-to-bottom"
                >
                  Voir tous les projets
                </button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Container>
      <IconScroll />
    </Container>
  );
}
