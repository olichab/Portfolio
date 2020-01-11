import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Element } from 'react-scroll';
import Competence from './Competence';
import photo from '../assets/images/Photo_OC.jpg';
import logoReact from '../assets/images/logos/react.svg';
import logoRedux from '../assets/images/logos/redux.svg';
import logoNodeJS from '../assets/images/logos/nodejs.svg';
import logoApi from '../assets/images/logos/api.svg';
import logoPostman from '../assets/images/logos/postman.svg';
import logoTypescript from '../assets/images/logos/typescript.svg';
import logoGit from '../assets/images/logos/git.svg';
import logoGithub from '../assets/images/logos/github.svg';
import logoJira from '../assets/images/logos/jira.svg';
import logoBitbucket from '../assets/images/logos/bitbucket.svg';
import logoAgile from '../assets/images/logos/agile.svg';
import logoBootstrap from '../assets/images/logos/bootstrap.svg';
import logoHtml from '../assets/images/logos/html5.svg';
import logoCss from '../assets/images/logos/css3.svg';
import logoSketch from '../assets/images/logos/sketch.svg';
import logoAdobeXD from '../assets/images/logos/adobexd.svg';
import logoPhotoshop from '../assets/images/logos/photoshop.svg';
import logoIllustrator from '../assets/images/logos/illustrator.svg';

import '../scss/Bio.scss';

export default function Bio() {
  return (
    <Element name='anchorBioPart'>
      <Container className='bio-container'>
        <Row className='p-5'>
          <Col>
            <h1>BIO</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col
            xs='12'
            md='8'
            lg='5'
            className='my-auto offset-lg-2 presentaion-text'
          >
            <p>
              Je m’appelle Olivier Chabot, j’ai 28 ans. Je suis diplômé de l’IUT
              de Vélizy-Villacoublay en Métiers du Multimédia et de l’Internet.
              Après des études en infographie 3D et avoir excercé dans ce
              domaine, j’ai décidé, quelques années plus tard, de renouer avec
              ma première passion: le développement web.
            </p>
          </Col>
          <Col xs='12' lg='4' className='my-auto'>
            <Media
              object
              src={photo}
              alt='photo olivier chabot'
              className='photo'
            />
          </Col>
        </Row>
        <Row className='p-5'>
          <Col>
            <h1>COMPÉTENCES</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs='11' md='9' lg='8'>
            <Row>
              <Col xs='6' md='4' lg='3'>
                <Competence
                  logo={logoReact}
                  logo2={logoRedux}
                  name='React'
                  name2='Redux'
                />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence logo={logoNodeJS} name='NodeJS' />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence
                  logo={logoApi}
                  logo2={logoPostman}
                  name='API Rest'
                  name2='Postman'
                  name3='BDD SQL'
                />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence logo={logoTypescript} name='Typescript' />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence
                  logo={logoGit}
                  logo2={logoGithub}
                  name='Git'
                  name2='Github'
                />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence
                  logo={logoJira}
                  logo2={logoBitbucket}
                  name='Jira'
                  name2='Bitbucket'
                />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence logo={logoAgile} name='Méthode agile' />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence logo={logoBootstrap} name='Bootstrap' />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence logo={logoHtml} name='Html 5' />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence logo={logoCss} name='Css 3' />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence
                  logo={logoSketch}
                  logo2={logoAdobeXD}
                  name='Sketch'
                  name2='Adobe XD'
                />
              </Col>
              <Col xs='6' md='4' lg='3'>
                <Competence
                  logo={logoPhotoshop}
                  logo2={logoIllustrator}
                  name='Photoshop'
                  name2='Illustrator'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
