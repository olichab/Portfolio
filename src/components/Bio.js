import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import uuid from "react-uuid";
import { playTlBio } from "../timelines";
import Competence from "./Competence";
import photo from "../assets/images/Photo_OC.png";
import sentence from "../assets/images/Sentence.png";
import logoReact from "../assets/images/logos/react.svg";
import logoRedux from "../assets/images/logos/redux.svg";
import logoNodeJS from "../assets/images/logos/nodejs.svg";
import logoApi from "../assets/images/logos/api.svg";
import logoTypescript from "../assets/images/logos/typescript.svg";
import logoGit from "../assets/images/logos/git.svg";
import logoGithub from "../assets/images/logos/github.svg";
import logoJira from "../assets/images/logos/jira.svg";
import logoBitbucket from "../assets/images/logos/bitbucket.svg";
import logoAgile from "../assets/images/logos/agile.svg";
import logoBootstrap from "../assets/images/logos/bootstrap.svg";
import logoHtml from "../assets/images/logos/html5.svg";
import logoCss from "../assets/images/logos/css3.svg";
import logoSketch from "../assets/images/logos/sketch.svg";
import logoAdobeXD from "../assets/images/logos/adobexd.svg";
import logoPhotoshop from "../assets/images/logos/photoshop.svg";
import logoIllustrator from "../assets/images/logos/illustrator.svg";

import "../scss/Bio.scss";

const competences = [
  {
    srcLogo: [logoReact, logoRedux],
    name: ["React", "Redux"],
  },
  { srcLogo: [logoTypescript], name: ["Typescript", "PropTypes"] },
  { srcLogo: [logoNodeJS], name: ["NodeJS", "SQL"] },
  { srcLogo: [logoApi], name: ["API Rest", "Postman"] },
  { srcLogo: [logoGit, logoGithub], name: ["Git", "Github"] },
  { srcLogo: [logoJira, logoBitbucket], name: ["Jira", "Bitbucket"] },
  { srcLogo: [logoAgile], name: ["Méthode agile"] },
  { srcLogo: [logoBootstrap], name: ["Bootstrap"] },
  { srcLogo: [logoHtml], name: ["Html 5"] },
  { srcLogo: [logoCss], name: ["Css 3"] },
  { srcLogo: [logoSketch, logoAdobeXD], name: ["Sketch", "AdobeXD"] },
  {
    srcLogo: [logoPhotoshop, logoIllustrator],
    name: ["Photoshop", "Illustrator"],
  },
];

const Bio = () => {
  const refPartText = useRef([]);
  const refSentence = useRef(null);
  const refContainerCompetence = useRef([]);

  useEffect(() => {
    playTlBio(refPartText, refSentence, refContainerCompetence);
  }, []);
  return (
    <Container fluid id="bio" className="bio-container">
      <Row>
        <Col xs="12" lg="6" className="bio-left-part">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs="12" md="8" className="about-photo">
                <img src={photo} alt="olivier chabot" className="photo" />
              </Col>
              <div className="col-xs-12 col-md-10 col-xl-8 about-text">
                <p ref={(el) => (refPartText.current[0] = el)}>
                  Fasciné depuis petit par la technologie et les possibilités
                  infinies qu’elle offre, c’est naturellement que je me suis
                  orienté vers le domaine du numérique.
                </p>
                <br />
                <p ref={(el) => (refPartText.current[1] = el)}>
                  Durant mon DUT MMI (Métiers du Multimédia et de l’Internet) et
                  mes études en infographie 3D, j’ai pu développer ma
                  sensibilité artistique et essayer de satisfaire ma curiosité
                  sans limite.
                </p>
                <br />
                <p ref={(el) => (refPartText.current[2] = el)}>
                  Bien qu’ayant travaillé sur des projets captivants en tant
                  qu’infographiste 3D, j’ai décidé, quelques années plus tard,
                  de renouer avec ma première passion: le développement web.
                </p>
                <br />
                <p ref={(el) => (refPartText.current[3] = el)}>
                  Après un bootcamp à la Wild Code School et une première
                  expérience réussie au sein d’Altavia connect, je suis à la
                  recherche de nouveaux défis et serais ravi de mettre à
                  contribution mes compétences dans vos projets web.
                </p>
                <br />
                <img
                  src={sentence}
                  alt="sentence"
                  className="sentence"
                  ref={refSentence}
                />
              </div>
            </Row>
          </Container>
        </Col>
        <Col xs="12" lg="6" className="bio-right-part p-0">
          <Container fluid className="d-flex h-100">
            <Row className="justify-content-center">
              <Col xs="12" className="container-title-competences">
                <svg viewBox="0 0 72 16">
                  <text x="0" y="15">
                    COMPÉTENCES
                  </text>
                </svg>
              </Col>
              <Col xs="12" lg="9" xl="8" className="d-flex align-items-center">
                <Row className="p-5 p-md-3">
                  {competences.map((c, i) => {
                    return (
                      <div
                        className="col col-xs-6 col-md-3 col-lg-6 col-xl-4 p-0 mt-2"
                        key={uuid()}
                        ref={(el) => (refContainerCompetence.current[i] = el)}
                      >
                        <Competence srcLogo={c.srcLogo} name={c.name} />
                      </div>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Bio;
