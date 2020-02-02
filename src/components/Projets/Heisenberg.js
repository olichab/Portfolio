import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import HeisenbergImage from '../../assets/images/projets/2D/Heinsenberg.jpg';
import '../../scss/ProjetDetails.scss';

const photos = [
  {
    src: HeisenbergImage,
    width: 7,
    height: 4
  }
];

export default function LaDefenseArena() {
  const stack = ['Illustrator', 'Tablette graphique', 'Papier & crayon'];

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
          <h1 className='title-details-projet'>Heisenberg</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            En tant que fan de la série
            <b> Breaking Bad</b>, j&apos;ai réalisé cette infographie en hommage
            à<b> Heisenberg </b>
            qui connnait une fin tragique.
            <br />
            Il est ici fait référence à cette
            <b> scène symbolique </b>
            où il déclare cette réplique mythique
            <b> &quot;Say my name&quot;</b>.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2018</p>
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
            to='/hells-kitchen'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/sketch'
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
