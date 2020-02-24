import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import bolImage1 from "../../assets/images/projets/Web/BriefOnline/1_Bol_OngoingProject.jpg";
import bolImage2 from "../../assets/images/projets/Web/BriefOnline/2_Bol_AddSupport.jpg";
import bolImage3 from "../../assets/images/projets/Web/BriefOnline/3_Bol_Support.jpg";
import bolImage4 from "../../assets/images/projets/Web/BriefOnline/4_Bol_Workflow.jpg";
import "../../scss/ProjetDetails.scss";

const photos = [
  {
    src: bolImage1,
    width: 4,
    height: 2
  },
  {
    src: bolImage2,
    width: 4,
    height: 2
  },
  {
    src: bolImage3,
    width: 4,
    height: 2
  },
  {
    src: bolImage4,
    width: 4,
    height: 2
  }
];

export default function BriefOnline() {
  const stack = [
    "AngularJS",
    "Java",
    "Javascript",
    "MySQL",
    "Html",
    "Css",
    "Sass",
    "Gulp",
    "Material Design"
  ];

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
          <h1 className='title-details-projet'>Brief Online</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='8'>
          <p>
            La web application « <b>Brief Online</b> » permet aux clients
            d’Altavia d’envoyer un <b>brief de leurs besoins</b> et d’avoir un
            <b> suivi</b> de leurs projets.
            <br />
            Le client peut gérer ses
            <b> campagnes </b>
            et y inclure des
            <b> supports </b>
            (brochure, catalogue, affiche, roll-up, PLV...) qu&apos;il pourra
            <b> paramétrer </b>à souhait.
          </p>
          <p>
            Voici une liste non exhaustive des <b>tâches réalisées</b> sur ce
            projet:
          </p>
          <ul>
            <li>
              Stabilisation de la version 3 de Brief Online (debugging,
              amélioration des performances)
            </li>
            <li>
              Refonte de la partie workflow permettant aux clients de suivre
              l&apos;avancement de leurs projets
            </li>
            <li>Réalisation de maquettes</li>
            <li>
              Développement du contrôle en amont des fichiers PDF (Preflight)
            </li>
            <li>Mise en place de la messagerie interne</li>
            <li>Upload et encodage des fichiers envoyés</li>
            <li>Création de template d’emails et gestion de leur envoi</li>
            <li>Écriture de tests fonctionnels et unitaires</li>
            <li>Rédaction de documentation</li>
            <li>Support de l&apos;application</li>
          </ul>
        </Col>
        <Col xs='12' lg='4'>
          <Col xs='12' className='p-0'>
            <p>Année: 2019</p>
          </Col>
          <Col xs='12' className='p-0'>
            <p>Catégorie: Développement web</p>
          </Col>
          <Col xs='12' className='p-0'>
            <a
              href='https://www.altavia-group.com/fr/'
              className='link-unstyled'
            >
              www.altavia-group.com
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
            to='/mooviz'
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
