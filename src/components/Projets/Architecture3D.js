import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Architecture3DImage1 from '../../assets/images/projets/3D/Architecture/1_Salon.jpg';
import Architecture3DImage2 from '../../assets/images/projets/3D/Architecture/2_HarlemStreet.jpg';
import Architecture3DImage3 from '../../assets/images/projets/3D/Architecture/3_Maison.jpg';
import Architecture3DImage4 from '../../assets/images/projets/3D/Architecture/4_SalleDebain.jpg';
import Architecture3DImage5 from '../../assets/images/projets/3D/Architecture/5_Montagne.jpg';
import '../../scss/ProjetDetails.scss';

const photos = [
  {
    src: Architecture3DImage1,
    width: 5,
    height: 4
  },
  {
    src: Architecture3DImage2,
    width: 7,
    height: 4
  },
  {
    src: Architecture3DImage3,
    width: 7,
    height: 4
  },
  {
    src: Architecture3DImage4,
    width: 4,
    height: 5
  },
  {
    src: Architecture3DImage5,
    width: 3,
    height: 4
  }
];

export default function Architecture3D() {
  const stack = ['3ds Max', 'V-ray', 'Substance painter', 'Photoshop'];

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
          <h1 className='title-details-projet'>Architecture 3D</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            Voici quelques
            <b> scènes d&apos;architecture 3D </b>
            réalisées sur mon temps libre.
            <br />
            J&apos;ai pu expérimenter différents
            <b> éclairages </b>
            et
            <b> compositions </b>
            que ce soit dans un style
            <b> réaliste </b>
            ou
            <b> semi-réaliste</b>, en
            <b> intérieur </b>
            ou en
            <b> extérieur</b>.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2016-2017</p>
          </Col>
          <Col xs='12' className='p-0'>
            <p>Catégorie: Infographie 3D</p>
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
            to='/la-defense-arena'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/billeterie-3d'
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
