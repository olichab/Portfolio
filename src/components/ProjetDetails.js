import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import parse from "html-react-parser";
import GalleryPano from "./GalleryPano";
import GalleryPhoto from "./GalleryPhoto";
import Pagination from "./Pagination";
import "../scss/ProjetDetails.scss";

export default function ProjetDetails({ projectDetails }) {
  const {
    id,
    title,
    year,
    category,
    website,
    tags,
    description,
    type,
    images,
  } = projectDetails;

  return (
    <Container className="details-projet-container">
      <Row>
        <Col xs="auto">
          <h1 className="title-details-projet">{title}</h1>
        </Col>
      </Row>
      <Row className="text-details-projet justify-content-center">
        <Col xs="12" lg="7" className="pb-5">
          {parse(description)}
        </Col>
        <Col xs="12" lg="4" className="offset-lg-1">
          <Col xs="12" className="p-0">
            <p>Année : {year}</p>
          </Col>
          <Col xs="12" className="p-0">
            <p>Catégorie : {category}</p>
          </Col>
          <Col xs="12" className="p-0">
            <a href={website.url} className="link-unstyled">
              {website.name}
            </a>
          </Col>
          <Row className="justify-content-center align-items-center mt-5">
            {tags.length &&
              tags.map((t) => (
                <Col xs="auto" className="p-2" key={t}>
                  <p className="label-stack">{t}</p>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
      {type ? (
        <Container className="p-0">
          <GalleryPano images={images} />
        </Container>
      ) : (
        <Container>
          <GalleryPhoto images={images} />
        </Container>
      )}
      <Pagination currentId={id} />
    </Container>
  );
}

ProjetDetails.defaultProps = {
  projectDetails: [],
};

ProjetDetails.propTypes = {
  projectDetails: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.string,
    category: PropTypes.string,
    website: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    type: PropTypes.string,
    images: PropTypes.PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
      })
    ),
  }),
};
