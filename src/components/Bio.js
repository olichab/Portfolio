import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import uuid from "react-uuid";
import Competence from "./Competence";
import Typelighter from "./Typelighter";
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

export default function Bio() {
  return (
    <Container className="bio-container" id="bio">
      <Row className="p-3 p-md-5">
        <Col>
          <h1>BIO</h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-end">
        <Col xs="12" lg="5" xl="4" className="d-none d-lg-block">
          <Media object src={sentence} alt="sentence" className="sentence" />
        </Col>
        <Col xs="12" md="8" lg="4" className="about-photo">
          <Media
            object
            src={photo}
            alt="photo olivier chabot"
            className="photo"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="8" className="offset-md-2 about-text ">
          <p>
            Fasciné depuis petit par la technologie et les possibilités infinies
            qu’elle offre, c’est naturellement que je me suis orienté vers le
            domaine du numérique.
          </p>
          <br />
          <p>
            Durant mon DUT MMI (Métiers du Multimédia et de l’Internet) et mes
            études en infographie 3D, j’ai pu développer ma sensibilité
            artistique et essayer de satisfaire ma curiosité sans limite.
          </p>
          <br />
          <p>
            Bien qu’ayant travaillé sur des projets captivants en tant
            qu’infographiste 3D, j’ai décidé, quelques années plus tard, de
            renouer avec ma première passion: le développement web.
          </p>
          <br />
          <p>
            Après un bootcamp à la Wild Code School et une première expérience
            réussie au sein d’Altavia connect, je suis à la recherche de
            nouveaux défis et serais ravi de mettre à contribution mes
            compétences dans vos projets web.
          </p>
          <br />
          <Row className="d-none d-lg-block">
            <Col xs="12">
              <Typelighter />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="p-3 p-md-5 mt-5">
        <Col>
          <h1>COMPÉTENCES</h1>
        </Col>
      </Row>
      <Container>
        <Row className="justify-content-center">
          <Col xs="11" md="9" lg="8">
            <Row>
              {competences.map((c) => {
                return (
                  <Col xs="6" md="4" lg="3" key={uuid()}>
                    <Competence srcLogo={c.srcLogo} name={c.name} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
