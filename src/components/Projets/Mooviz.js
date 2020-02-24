import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import moovizImage1 from "../../assets/images/projets/Web/Mooviz/1_Mooviz.jpg";
import moovizImage2 from "../../assets/images/projets/Web/Mooviz/2_Mooviz.jpg";
import moovizImage3 from "../../assets/images/projets/Web/Mooviz/3_Mooviz.jpg";
import moovizImage4 from "../../assets/images/projets/Web/Mooviz/4_Mooviz.jpg";
import moovizImage5 from "../../assets/images/projets/Web/Mooviz/5_Mooviz.jpg";
import moovizImage6 from "../../assets/images/projets/Web/Mooviz/6_Mooviz.jpg";
import moovizImage7 from "../../assets/images/projets/Web/Mooviz/7_Mooviz.jpg";

import "../../scss/ProjetDetails.scss";

const photos = [
  {
    src: moovizImage1,
    width: 3,
    height: 2
  },
  {
    src: moovizImage2,
    width: 2,
    height: 4
  },
  {
    src: moovizImage3,
    width: 3,
    height: 2
  },
  {
    src: moovizImage4,
    width: 3,
    height: 2
  },
  {
    src: moovizImage5,
    width: 3,
    height: 2
  },
  {
    src: moovizImage6,
    width: 3,
    height: 2
  },
  {
    src: moovizImage7,
    width: 3,
    height: 2
  }
];

export default function Mooviz() {
  const stack = [
    "React",
    "Redux",
    "NodesJS",
    "Express",
    "KnexJS",
    "API Rest",
    "MySQL",
    "Javascript",
    "Html",
    "Css",
    "Sass",
    "Bootstrap"
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
          <h1 className='title-details-projet'>Mooviz</h1>
        </Col>
      </Row>
      <Row className='text-details-projet justify-content-center'>
        <Col xs='12' lg='8'>
          <p>
            <b>Mooviz</b> est une web application permettant la gestion de sa
            <b> bibliothèque de films</b>.
          </p>
          <p>
            Voici une liste non exhaustive des <b>tâches réalisées</b> sur ce
            projet:
          </p>
          <ul>
            <li>Maquette du site</li>
            <li>Mise en place de la base de données</li>
            <li>Création de compte utilisateur</li>
            <li>Authentification</li>
            <li>Gestion de son profil</li>
            <li>Sécurisation avec JSON Web token</li>
            <li>Ajout / suppression de film dans la bibliothèque</li>
            <li>
              Fiches d’informations des films (nom, synopsis, catégorie,
              réalisateur, date de sortie, durée)
            </li>
            <li>Filtre par catégorie</li>
            <li>Suggestion de film aléatoire</li>
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
              href='https://github.com/olichab/Mooviz'
              className='link-unstyled'
            >
              github.com/olichab/Mooviz
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
            to='/brief-online'
            className='link-switch-project hvr-sweep-to-left'
            smooth='true'
          >
            Projet
            <br />
            précédent
          </Link>
          <Link
            to='/hello-world'
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
