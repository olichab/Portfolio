import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Pannellum } from "pannellum-react";
import laDefenseArenaImage1 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/1_LaDefenseArena_PanoRugby.jpg";
import laDefenseArenaImage2 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/2_LaDefenseArena_PanoSalleConcert.jpg";
import laDefenseArenaImage3 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/3_LaDefenseArena_PanoSalon2.jpg";
import laDefenseArenaImage4 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/4_LaDefenseArena_PanoSalon3.jpg";
import laDefenseArenaImage5 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/5_LaDefenseArena_PanoSalon1.jpg";
import laDefenseArenaImage6 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/6_LaDefenseArena_PanoSalon4.jpg";
import laDefenseArenaImage7 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/7_LaDefenseArena_PanoSalon5.jpg";
import laDefenseArenaImage8 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/8_LaDefenseArena_PanoSalon6.jpg";
import laDefenseArenaImage9 from "../../assets/images/projets/3D/Pacifa/LaDefenseArena/9_LaDefenseArena_PanoSalon8.jpg";
import "../../scss/ProjetDetails.scss";

export default function LaDefenseArena() {
  const stack = [
    "3ds Max",
    "Mental Ray",
    "V-Ray",
    "Max Script",
    "Rail clone",
    "Substance painter",
    "Photoshop"
  ];

  return (
    <Container className='details-projet-container'>
      <Row>
        <Col xs='auto'>
          <h1 className='title-details-projet'>La Défense Arena</h1>
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
            travailler sur les premiers
            <b> rendus 3D </b>
            de
            <b> la Défense Arena</b>, alors que celle-ci était encore en
            construction, que ce soit en configuration
            <b> rugby</b>,<b> salle de concert </b>
            ou l&apos;intérieur des
            <b> futures loges</b>.
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
            image={laDefenseArenaImage1}
            pitch={0}
            yaw={270}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage2}
            pitch={0}
            yaw={270}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage3}
            pitch={0}
            yaw={180}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage4}
            pitch={0}
            yaw={50}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage5}
            pitch={0}
            yaw={270}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage6}
            pitch={0}
            yaw={270}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage7}
            pitch={0}
            yaw={220}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage8}
            pitch={0}
            yaw={180}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
        <Col xs='9' xl='6' className='p-1'>
          <Pannellum
            width='100%'
            height='320px'
            image={laDefenseArenaImage9}
            pitch={0}
            yaw={240}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
      </Row>
      <Row className='justify-content-center mt-5'>
        <Col xs='auto'>
          <Link
            to='/viparis-la-plaza'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/architecture-3d'
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
