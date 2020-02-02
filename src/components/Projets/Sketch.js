import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import SketchImage from '../../assets/images/projets/2D/SketchMirodia.JPG';
import '../../scss/ProjetDetails.scss';

const photos = [
  {
    src: SketchImage,
    width: 7,
    height: 3
  }
];

export default function LaDefenseArena() {
  const stack = ['Photoshop', 'Tablette graphique', 'Papier & crayon'];

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
          <h1 className='title-details-projet'>Sketch</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            Dans le cadre d&apos;un projet de
            <b> court métrage </b>
            réalisé au
            <b> Studio Mercier</b>, j&apos;ai effectué quelques
            <b> recherches graphiques </b>
            sur les décors dont en voici un croquis, par la suite colorisé.
            <br />
            <br />
            Ce court métrage prend place dans un monde, nommé
            <b> Mirodia</b>, où les
            <b> inégalités sociales </b>
            sont à leur
            <b> paraxoxysme</b>.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2015</p>
          </Col>
          <Col xs='12' className='p-0'>
            <p>Catégorie: Infographie 2D</p>
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
        <Col xs='11' lg='9'>
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
        </Col>
      </Row>
      <Row className='justify-content-center mt-5'>
        <Col xs='auto'>
          <Link
            to='/heisenberg'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
