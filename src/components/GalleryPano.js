import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

import { Row, Col } from "reactstrap";
import { Pannellum } from "pannellum-react";

export default function GalleryPano({ images }) {
  return (
    <Row className="justify-content-center">
      {images.map((img) => (
        <Col xs="10" xl="6" className="p-1" key={uuid()}>
          <Pannellum
            width="100%"
            height="320px"
            image={img.src}
            pitch={0}
            yaw={img.yaw}
            hfov={70}
            showControls={false}
            disableKeyboardCtrl
            mouseZoom={false}
            autoLoad
            autoRotate={2}
          />
        </Col>
      ))}
    </Row>
  );
}

GalleryPano.defaultProps = {
  images: [],
};

GalleryPano.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      yaw: PropTypes.number,
    })
  ),
};
