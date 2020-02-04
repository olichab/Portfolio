import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Pannellum } from 'pannellum-react';
import Billeterie3DImage1 from '../../assets/images/projets/3D/Pacifa/1_Pacifa_Pano.jpg';
import Billeterie3DImage2 from '../../assets/images/projets/3D/Pacifa/2_Pacifa_Pano.jpg';
import Billeterie3DImage3 from '../../assets/images/projets/3D/Pacifa/3_Pacifa_Pano.jpg';
import Billeterie3DImage4 from '../../assets/images/projets/3D/Pacifa/4_Pacifa_Pano.jpg';
import Billeterie3DImage5 from '../../assets/images/projets/3D/Pacifa/5_Pacifa_Pano.jpg';
import Billeterie3DImage6 from '../../assets/images/projets/3D/Pacifa/6_Pacifa_Pano.jpg';
import '../../scss/ProjetDetails.scss';

export default function LaDefenseArena() {
  const stack = [
    '3ds Max',
    'Mental Ray',
    'V-Ray',
    'Max Script',
    'Rail clone',
    'Forest pack',
    'Substance painter',
    'Photoshop'
  ];

  return (
    <Container className='details-projet-container'>
      <Row>
        <Col xs='auto'>
          <h1 className='title-details-projet'>Vues 3D pour billeteries</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            Pacifa Decision est le
            <b> leader Européen </b>
            de la modélisation en 3D
            <b> d&apos;installations sportives </b>
            proposant à ses clients des
            <b> outils innovants et dynamiques </b>
            qui leur permettent de
            <b> booster leur visibilité</b>, ainsi que les
            <b> ventes de billets </b>
            à la fois grand public et hospitalités.
            <br />
            <br />
            Au sein des équipes de Pacifa Decision, j&apos;ai été amené à
            travailler sur les
            <b> rendus 3D </b>
            de différentes
            <b> billeteries en ligne</b>, que ce soit pour des
            <b> stades de football </b>
            (Parc des Princes, Vélodrome, stade Louis II, Santiago Bernabéu),
            des
            <b> salles de basketball </b>
            (BCM Gravelines, SLUC Nancy), des
            <b> salles de spectacle </b>
            (Folies Bergère), des
            <b> terrains de tennis </b>
            (Rolland Garros) ou encore des
            <b> hippodromes </b>
            (ParisLongchamp).
            <br />
            J&apos;ai également participé à des projets proposant diverses
            <b> expériences VR </b>
            aux clients de Pacifa Decision.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2015-2016</p>
          </Col>
          <Col xs='12' className='p-0'>
            <p>Catégorie: Infographie 3D</p>
          </Col>
          <Col xs='12' className='p-0'>
            <a
              href='http://www.pacifa-decision.com/?lang=fr'
              className='link-unstyled'
            >
              www.pacifa-decision.com
            </a>
          </Col>
          <Row className='align-items-center mt-4'>
            {stack.length &&
              stack.map(s => (
                <Col xs='auto' key={s}>
                  <p className='label-stack'>{s}</p>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={Billeterie3DImage1}
            pitch={0}
            yaw={270}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={Billeterie3DImage2}
            pitch={0}
            yaw={270}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={Billeterie3DImage3}
            pitch={0}
            yaw={180}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={Billeterie3DImage4}
            pitch={0}
            yaw={320}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={Billeterie3DImage5}
            pitch={0}
            yaw={270}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={Billeterie3DImage6}
            pitch={0}
            yaw={220}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate
          />
        </Col>
      </Row>
      <Row className='justify-content-center mt-5'>
        <Col xs='auto'>
          <Link
            to='/architecture-3d'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/maquettes-et-illustrations'
            className='link-switch-project hvr-sweep-to-right'
            smooth='true'
          >
            Projet
            <br />
            suivant
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
