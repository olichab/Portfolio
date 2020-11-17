import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Div100vh from "react-div-100vh";
import SocialNetwork from "./SocialNetwork";
import { useViewport } from "../hooks/useViewport";
import { playTlIntro } from "../timelines";
import resume from "../assets/docs/CV_Olivier_Chabot.pdf";
import "../scss/Intro.scss";
import "../scss/SocialNetwork.scss";

const Home = () => {
  const refTitle = useRef(null);
  const refText = useRef(null);
  const refBar = useRef(null);
  const refButtonResume = useRef(null);
  const refButtonSeeProjects = useRef(null);
  const { width } = useViewport();
  const breakpoint = 992;

  useEffect(() => {
    playTlIntro(
      refTitle,
      refText,
      refBar,
      refButtonResume,
      refButtonSeeProjects
    );
  }, []);
  return (
    <Div100vh className="intro-container" id="home">
      {width > breakpoint && <SocialNetwork />}

      <Container>
        <Row className="justify-content-center">
          <Col xs="11" md="10" lg="8">
            <h1 className="welcome-title" ref={refTitle}>
              Welcome
            </h1>
            <div className="text-intro" ref={refText}>
              <p>
                Je suis
                <span className="word-yellow"> Olivier Chabot</span>
                .
                <br />
                Développeur front-end.
                <br />
                Bienvenue sur mon
                <span className="word-yellow"> portfolio</span>.
              </p>
            </div>
            <hr ref={refBar} />
          </Col>
        </Row>
        <Row className="buttons-row justify-content-center">
          <Col
            xs="12"
            md="10"
            lg="8"
            className=" d-flex justify-content-center justify-content-md-end"
          >
            <button type="button" className="btn-yellow" ref={refButtonResume}>
              <a href={resume} download className="link-unstyled">
                CV
                <svg
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <title>download</title>
                  <g>
                    <path
                      className="st0"
                      d="M19,9h-4V3H9v6H5l7,7L19,9z M5,18v2h14v-2H5z"
                    />
                  </g>
                </svg>
              </a>
            </button>
            <NavLink className="link-unstyled" to="/projets">
              <button
                type="button"
                className="btn-yellow"
                ref={refButtonSeeProjects}
              >
                Voir les projets
              </button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Div100vh>
  );
};

export default Home;
