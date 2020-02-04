import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Projet from './Projet';
import thumbnailBOL from '../assets/images/projets/Thumbnails/Web/Thumbnail_BriefOnline.jpg';
import thumbnaiHelloWorld from '../assets/images/projets/Thumbnails/Web/Thumbnail_HelloWorld.jpg';
import thumbnailMooviz from '../assets/images/projets/Thumbnails/Web/Thumbnail_Mooviz.jpg';
import thumbnailLaDefenseArena from '../assets/images/projets/Thumbnails/3D/Thumbnail_LaDefenseArena.jpg';
import thumbnailBullit from '../assets/images/projets/Thumbnails/3D/Thumbnail_Bullit.jpg';
import thumbnailArchitecture from '../assets/images/projets/Thumbnails/3D/Thumbnail_Archi.jpg';
import thumbnailPacifa from '../assets/images/projets/Thumbnails/3D/Thumbnail_PacifaBasket.jpg';
import thumbnailHellsKitchen from '../assets/images/projets/Thumbnails/3D/Thumbnail_HellsKitchen.jpg';
import thumbnailUvsq from '../assets/images/projets/Thumbnails/2D/Thumbnail_Uvsq.jpg';
import thumbnailBreakingBad from '../assets/images/projets/Thumbnails/2D/Thumbnail_BreakingBad.jpg';
import thumbnailSketchMirodia from '../assets/images/projets/Thumbnails/2D/Thumbnail_SketchMirodia.jpg';

import '../scss/Projets.scss';

export default function Projets() {
  return (
    <Container className='container-projets' fluid='sm' id='projets'>
      <Row className='p-3 p-md-5'>
        <Col>
          <h1>PROJETS</h1>
        </Col>
      </Row>
      <Row className='justify-content-center no-gutters'>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailBOL}
            title='Brief Online'
            location='Altavia Connect'
            path='/brief-online'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailMooviz}
            title='Mooviz'
            location='Projet personnel'
            path='/mooviz'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnaiHelloWorld}
            title='Hello World'
            location='Wild Code School'
            path='/hello-world'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailBullit}
            title='Viparis La Plaza'
            location='Bullit studio'
            path='/viparis-la-plaza'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailLaDefenseArena}
            title='La Défense Arena'
            location='Pacifa Decision'
            path='/la-defense-arena'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailArchitecture}
            title='Architecture 3D'
            location='Projets personnels'
            path='/architecture-3d'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailPacifa}
            title='Vues 3D pour billeteries'
            location='Pacifa Decision'
            path='/billeterie-3D'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailUvsq}
            title='Maquettes et illustrations'
            location='UVSQ'
            path='/maquettes-et-illustrations'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailHellsKitchen}
            title="Hell's Kitchen"
            location='Projet personnel'
            path='/hells-kitchen'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailBreakingBad}
            title='Heisenberg'
            location='Projet personnel'
            path='/heisenberg'
          />
        </Col>
        <Col xs='12' md='6' lg='4'>
          <Projet
            thumbnail={thumbnailSketchMirodia}
            title='Sketch'
            location='Studio Mercier'
            path='/sketch'
          />
        </Col>
      </Row>
    </Container>
  );
}
