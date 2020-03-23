import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Competence from "./Competence";
import Typelighter from "./Typelighter";
import photo from "../assets/images/Photo_OC.jpg";
import logoReact from "../assets/images/logos/react.svg";
import logoRedux from "../assets/images/logos/redux.svg";
import logoNodeJS from "../assets/images/logos/nodejs.svg";
import logoApi from "../assets/images/logos/api.svg";
import logoPostman from "../assets/images/logos/postman.svg";
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

export default function Bio() {
  return (
    <Container className='bio-container' id='bio'>
      <Row className='p-3 p-md-5'>
        <Col>
          <h1>BIO</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='12' md='8' className='offset-lg-1 about-text'>
          <p>
            Je m’appelle Olivier Chabot, j’ai 29 ans. Je suis diplômé de l’IUT
            de Vélizy-Villacoublay en Métiers du Multimédia et de l’Internet.
            <br />
            <br />
            Je me suis ensuite orienté vers des études en infographie 3D et ai
            excercé dans ce domaine.
            <br />
            J’ai décidé, quelques années plus tard, de renouer avec ma première
            passion: le développement web.
            <br />
            <br />
            Après un bootcamp de 5 mois à la Wild Code School et une première
            expérience réussie au sein d&apos;Altavia connect, je suis à la
            recherche de nouveaux défis et serais ravi de mettre à contribution
            mes compétences dans vos projets web.
          </p>
          <Row className='d-none d-lg-block'>
            <Col xs='12'>
              <br />
              <Typelighter />
            </Col>
          </Row>
        </Col>
        <Col xs='12' lg='3' className='about-photo'>
          <Media
            object
            src={photo}
            alt='photo olivier chabot'
            className='photo'
          />
        </Col>
      </Row>
      <Row className='p-3 p-md-5 mt-5'>
        <Col>
          <h1>COMPÉTENCES</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='11' md='9' lg='8'>
          <Row>
            <Col xs='6' md='4' lg='3'>
              <Competence
                logo={[logoReact, logoRedux]}
                name={["React", "Redux"]}
              />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence logo={[logoNodeJS]} name={["NodeJS"]} />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence
                logo={[logoApi, logoPostman]}
                name={["API Rest", "Postman", "SQL"]}
              />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence logo={[logoTypescript]} name={["Typescript"]} />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence
                logo={[logoGit, logoGithub]}
                name={["Git", "Github"]}
              />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence
                logo={[logoJira, logoBitbucket]}
                name={["Jira", "Bitbucket"]}
              />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence logo={[logoAgile]} name={["Méthode agile"]} />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence logo={[logoBootstrap]} name={["Bootstrap"]} />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence logo={[logoHtml]} name={["Html 5"]} />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence logo={[logoCss]} name={["Css 3"]} />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence
                logo={[logoSketch, logoAdobeXD]}
                name={["Sketch", "Adobe XD"]}
              />
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Competence
                logo={[logoPhotoshop, logoIllustrator]}
                name={["Photoshop", "Illustrator"]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
