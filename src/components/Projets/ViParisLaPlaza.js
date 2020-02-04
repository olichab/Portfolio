import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import viParisLaPlazaImage1 from '../../assets/images/projets/3D/BullitStudio/1_Monuments.jpg';
import viParisLaPlazaImage2 from '../../assets/images/projets/3D/BullitStudio/2_NotreDame.jpg';
import viParisLaPlazaImage3 from '../../assets/images/projets/3D/BullitStudio/3_Invalides.jpg';
import viParisLaPlazaImage4 from '../../assets/images/projets/3D/BullitStudio/4_SacreCoeur.jpg';
import viParisLaPlazaImage5 from '../../assets/images/projets/3D/BullitStudio/5_ArcDeTriomphe.jpg';
import viParisLaPlazaImage6 from '../../assets/images/projets/3D/BullitStudio/6_MonumentsWireFrame.jpg';
import viParisLaPlazaImage7 from '../../assets/images/projets/3D/BullitStudio/7_Composition.jpg';
import '../../scss/ProjetDetails.scss';

const photos = [
  {
    src: viParisLaPlazaImage1,
    width: 8,
    height: 4
  },
  {
    src: viParisLaPlazaImage2,
    width: 11,
    height: 4
  },
  {
    src: viParisLaPlazaImage3,
    width: 11,
    height: 4
  },
  {
    src: viParisLaPlazaImage4,
    width: 11,
    height: 4
  },
  {
    src: viParisLaPlazaImage5,
    width: 12,
    height: 4
  },
  {
    src: viParisLaPlazaImage6,
    width: 10,
    height: 2
  },
  {
    src: viParisLaPlazaImage7,
    width: 12,
    height: 2
  }
];

export default function ViParisLaPlaza() {
  const stack = ['Maya', 'Arnold', 'Substance painter', 'Photoshop'];

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
          <h1 className='title-details-projet'>Viparis la Plaza</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='6'>
          <p>
            Au sein de
            <b> Bullit Studio</b>, en tant que
            <b> 3D Generalist</b>, j&apos;ai été amené à travailler sur la
            modélisation, le texturing, le lighting et le rendu 3D des
            principaux monuments de Paris pour le compte de
            <b> ViParis La Plaza</b>
            .
            <br />
            <br />
            <b>L&apos;écran de la Plaza</b> situé porte de Versailles, de par sa
            forme unique, permet une
            <b> orientation à 360°</b>. Utilisé pour indiquer quels
            <b> événements</b> se déroulent dans quels
            <b> pavillons</b>, l&apos;écran peut étendre son pouvoir
            d&apos;indication au niveau
            <b> parisien</b>,<b> national </b>
            et même
            <b> mondial</b>
            .
            <br />
            Dans un écrin autant graphique que pédagogique,
            <b> l&apos;écran de la Plaza</b> permet d&apos;affirmer
            <b> l&apos;identité visuelle de Viparis</b>, tout en offrant une
            <b> fenêtre culturelle</b> aux visiteurs.
            <br />
            <br />
            Dans ce projet, l&apos;écran de la Plaza indique la direction où se
            trouvent les principaux
            <b> monuments parisiens</b>, accompagnée de la
            <b> distance</b> à vol d&apos;oiseau, en
            <b> kilomètres</b> et en
            <b> miles</b>, qui sépare
            <b> la Plaza </b>
            du
            <b> monument</b>.
          </p>
        </Col>
        <Col xs='12' lg='6'>
          <Col xs='12' className='p-0'>
            <p>Année: 2017</p>
          </Col>
          <Col xs='12' className='p-0'>
            <p>Catégorie: Infographie 3D</p>
          </Col>
          <Col xs='12' className='p-0'>
            <a href='http://bullit-studio.fr' className='link-unstyled'>
              www.bullit-studio.fr
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
            to='/hello-world'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/la-defense-arena'
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
