import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import PropTypes from "prop-types";
import uuid from "react-uuid";

import "../scss/Competence.scss";

export default function Competence({ srcLogo, name }) {
  return (
    <Container className="competence-container">
      <Row className="h-50">
        <Col xs="auto">
          <Media object src={srcLogo[0]} />
          {srcLogo[1] && <Media object src={srcLogo[1]} />}
        </Col>
      </Row>
      <Row className="h-50 align-items-end">
        <Col xs="12" className="caption">
          {name.length &&
            name.map((e, i) =>
              i === 0 ? (
                <Fragment key={uuid()}>
                  <h2>{e}</h2>
                </Fragment>
              ) : (
                <Fragment key={uuid()}>
                  <h2>{e}</h2>
                </Fragment>
              )
            )}
        </Col>
      </Row>
    </Container>
  );
}

Competence.defaultProps = {
  srcLogo: [],
  name: [],
};

Competence.propTypes = {
  srcLogo: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.arrayOf(PropTypes.string),
};
