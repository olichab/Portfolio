import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import PROJECTS_LIST from "./helpers/projectsList";

export default function Pagination({ currentId }) {
  const lastProject = PROJECTS_LIST.filter(
    (p) => p.id === Number(currentId + 1)
  );
  const nextProject = PROJECTS_LIST.filter(
    (p) => p.id === Number(currentId - 1)
  );
  return (
    <div>
      <Row className="justify-content-center mt-5">
        <Col xs="auto">
          {lastProject[0] && (
            <Link
              to={`${lastProject[0].path}`}
              className="link-switch-project hvr-sweep-to-left"
              smooth="true"
            >
              Projet
              <br />
              précédent
            </Link>
          )}
          {nextProject[0] && (
            <Link
              to={`${nextProject[0].path}`}
              className="link-switch-project hvr-sweep-to-right"
              smooth="true"
            >
              Projet
              <br />
              suivant
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
}

Pagination.defaultProps = {
  currentId: 0,
};

Pagination.propTypes = {
  currentId: PropTypes.number,
};
