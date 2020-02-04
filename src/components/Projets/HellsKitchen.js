import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import HellsKitchenImage1 from '../../assets/images/projets/3D/Kitchen/1_Aubergine.jpg';
import HellsKitchenImage2 from '../../assets/images/projets/3D/Kitchen/2_Poire.jpg';
import '../../scss/ProjetDetails.scss';

const photos = [
  {
    src: HellsKitchenImage1,
    width: 1,
    height: 1
  },
  {
    src: HellsKitchenImage2,
    width: 1,
    height: 1
  }
];

export default function LaDefenseArena() {
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
          <h1 className='title-details-projet'>Hell's Kitchen</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            Sur mon temps libre, j&apos;ai débuté une série de
            <b> scènes 3D </b>
            mettant en lumière des
            <b> fruits </b>
            et
            <b> légumes </b>
            dans une cuisine peu commode à<b> l&apos;atmosphère dangereuse</b>.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2017</p>
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
            to='/maquettes-et-illustrations'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/heisenberg'
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
