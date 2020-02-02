import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import helloWorldImage1 from '../../assets/images/projets/Web/HelloWorld/1_HelloWorld.jpg';
import helloWorldImage2 from '../../assets/images/projets/Web/HelloWorld/2_HelloWorld.jpg';
import helloWorldImage3 from '../../assets/images/projets/Web/HelloWorld/3_HelloWorld.jpg';
import helloWorldImage4 from '../../assets/images/projets/Web/HelloWorld/4_HelloWorld.jpg';
import '../../scss/ProjetDetails.scss';

const photos = [
  {
    src: helloWorldImage1,
    width: 6,
    height: 4
  },
  {
    src: helloWorldImage2,
    width: 2,
    height: 4
  },
  {
    src: helloWorldImage3,
    width: 3,
    height: 4
  },
  {
    src: helloWorldImage4,
    width: 3,
    height: 4
  }
];

export default function HelloWorld() {
  const stack = ['React', 'NodeJS', 'React Simple Map', 'Material UI'];

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
          <h1 className='title-details-projet'>Hello world</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            <b>Hello World</b> est un projet réalisé durant ma formation à la
            Wild Code School.
            <br />
            Ce site web responsive permet de découvrir ou redécouvrir les{' '}
            <b>pays du monde</b> à travers une <b>carte interactive</b> et des{' '}
            <b>quizz </b>
            de géographie.
            <br />
            <br />
            L&apos;objectif de ce projet est l&apos;utilisation et
            l&apos;exploitation d&apos;
            <b>API externes</b> commme:
            <b> REST Countries</b>, <b> Google Custom Search</b> ou encore
            <b> Open Trivia.</b>
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2018</p>
          </Col>
          <Col xs='12' className='p-0'>
            <p>Catégorie: Développement web</p>
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
      {/* <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='9'>
          <p>
            <b>Hello World</b> est un projet réalisé durant ma formation à la
            Wild Code School.
            <br />
            Ce site web responsive permet de découvrir ou redécouvrir les{' '}
            <b>pays du monde</b> à travers une <b>carte interactive</b> et des{' '}
            <b>quizz </b>
            de géographie.
            <br />
            <br />
            L&apos;objectif de ce projet est l&apos;utilisation et
            l&apos;exploitation d&apos;
            <b>API externes</b> commme:
            <b> REST Countries</b>, <b> Google Custom Search</b> ou encore
            <b> Open Trivia.</b>
          </p>
        </Col>
        <Col xs='12' lg='9'>
          <p>Année: 2019</p>
        </Col>
        <Col xs='12' lg='9'>
          <p>Catégorie: Développement web</p>
        </Col>
      </Row>
      <Row className='justify-content-center align-items-center p-1'>
        {stack.length &&
          stack.map(e => (
            <Col xs='auto' className='p-2' key={e}>
              <p className='label-stack'>{e}</p>
            </Col>
          ))}
      </Row> */}
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
            to='/mooviz'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/viparis-la-plaza'
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
