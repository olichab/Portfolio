import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import MaquettesImage1 from '../../assets/images/projets/2D/Uvsq/1_Affiche0.jpg';
import MaquettesImage2 from '../../assets/images/projets/2D/Uvsq/2_Affiche1.jpg';
import MaquettesImage3 from '../../assets/images/projets/2D/Uvsq/3_Affiche2.jpg';
import MaquettesImage4 from '../../assets/images/projets/2D/Uvsq/4_Affiche3.jpg';
import MaquettesImage5 from '../../assets/images/projets/2D/Uvsq/5_Affiche4.jpg';
import MaquettesImage6 from '../../assets/images/projets/2D/Uvsq/6_Affiche5.jpg';
import MaquettesImage7 from '../../assets/images/projets/2D/Uvsq/7_Affiche6.jpg';
import MaquettesImage8 from '../../assets/images/projets/2D/Uvsq/8_Affiche7.jpg';
import MaquettesImage9 from '../../assets/images/projets/2D/Uvsq/9_Affiche8.jpg';
import MaquettesImage10 from '../../assets/images/projets/2D/Uvsq/10_Depliant1.jpg';
import MaquettesImage11 from '../../assets/images/projets/2D/Uvsq/11_Depliant2.jpg';
import MaquettesImage12 from '../../assets/images/projets/2D/Uvsq/12_totem.jpg';
import MaquettesImage13 from '../../assets/images/projets/2D/Uvsq/13_pictos.jpg';
import '../../scss/ProjetDetails.scss';

const photos = [
  {
    src: MaquettesImage1,
    width: 5,
    height: 7
  },
  {
    src: MaquettesImage2,
    width: 6,
    height: 4
  },
  {
    src: MaquettesImage3,
    width: 5,
    height: 7
  },
  {
    src: MaquettesImage4,
    width: 12,
    height: 4
  },
  {
    src: MaquettesImage5,
    width: 5,
    height: 6
  },
  {
    src: MaquettesImage6,
    width: 6,
    height: 4
  },
  {
    src: MaquettesImage7,
    width: 6,
    height: 4
  },
  {
    src: MaquettesImage8,
    width: 5,
    height: 7
  },
  {
    src: MaquettesImage9,
    width: 5,
    height: 7
  },
  {
    src: MaquettesImage10,
    width: 3,
    height: 4
  },
  {
    src: MaquettesImage11,
    width: 5,
    height: 4
  },
  {
    src: MaquettesImage12,
    width: 3,
    height: 3
  },
  {
    src: MaquettesImage13,
    width: 8,
    height: 4
  }
];

export default function LaDefenseArena() {
  const stack = ['Photoshop', 'Illustrator', 'Indesign'];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container className='details-projet-container'>
      <Row>
        <Col xs='auto'>
          <h1 className='title-details-projet'>Maquettes et illustrations</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            Durant mon stage de deuxième année de DUT, au
            <b> pôle communication </b>
            de
            <b> l&apos;Université de Versailles Saint-Quentin en Yvelines</b>
            , j&apos;ai pu assiter la directrice de communication.
            <br />
            <br />
            Mes missions étaient variées, allant de la création
            <b> d&apos;affiches</b>,<b> kakemonos</b>,<b> leaflet</b>,
            <b> totems </b>,<b> plans d&apos;orientation</b> en passant par la
            création de
            <b> pictogrammes</b>
            .
            <br />
            <br />
            J&apos;ai également pu épauler le
            <b> chargé de production audiovisuelle</b> sur différents tournages
            de <b>vidéos institutionelles</b>.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2012</p>
          </Col>
          <Col xs='12' className='p-0'>
            <p>Catégorie: Infographie 2D</p>
          </Col>
          <Col xs='12' className='p-0'>
            <a href='http://www.uvsq.fr' className='link-unstyled'>
              www.uvsq.fr
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
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <Row className='justify-content-center mt-5'>
        <Col xs='auto'>
          <Link
            to='/billeterie-3d'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/hells-kitchen'
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
