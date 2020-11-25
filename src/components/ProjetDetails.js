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
    <>
      <Container fluid className="all-part-container">
        <Container fluid className="details-projet">
          <Container>
            <Row className="title-details-projet">
              <Col xs="auto" className="w-100">
                <h1>{title}</h1>
              </Col>
              <Col xs="12" className="p-0">
                <p>
                  {category} - {year}
                </p>
              </Col>
              <Col xs="12">
                {website.url && (
                  <a
                    href={website.url}
                    className="link-unstyled"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website.name}
                  </a>
                )}
              </Col>
            </Row>
            <Row className="text-details-projet justify-content-center">
              <Col xs="12" md="10" lg="8" xl="7">
                {parse(description)}
              </Col>
            </Row>
            <Row className="stack">
              {tags.length &&
                tags.map((t) => (
                  <Col xs="auto" className="p-2" key={t}>
                    <p className="label-stack">{t}</p>
                  </Col>
                ))}
            </Row>
          </Container>
        </Container>
        {type ? (
          <Container className="gallery-pano">
            <GalleryPano images={images} />
          </Container>
        ) : (
          <Container className="gallery-photo">
            <GalleryPhoto images={images} />
          </Container>
        )}

        <Pagination currentId={id} />
      </Container>
    </>
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
