import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { Row, Col } from "reactstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from "prop-types";

export default function GalleryPhoto({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = images.map((img) => {
    return { src: img.src, width: img.width, height: img.height };
  });

  return (
    <Row>
      <Col>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Col>
    </Row>
  );
}

GalleryPhoto.defaultProps = {
  images: [],
};

GalleryPhoto.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
};
