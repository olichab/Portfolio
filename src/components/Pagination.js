import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { playTlPagination } from "../timelines";
import ArrowLeft from "../assets/images/pictos/arrow_Left.svg";
import ArrowRight from "../assets/images/pictos/arrow_right.svg";

import PROJECTS_LIST from "./helpers/projectsList";
import "../scss/Pagination.scss";

export default function Pagination({ currentId }) {
  const refLast = useRef(null);
  const refNext = useRef(null);

  const lastProject = PROJECTS_LIST.filter(
    (p) => p.id === Number(currentId + 1)
  );
  const nextProject = PROJECTS_LIST.filter(
    (p) => p.id === Number(currentId - 1)
  );

  useEffect(() => {
    playTlPagination(refLast, refNext);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <Container fluid className="pagination-container">
      <Row className="justify-content-center align-items-center">
        {lastProject[0] && (
          <Link
            to={`${lastProject[0].path}`}
            className="link-switch-project-left"
          >
            <Col className="text-left">Projet précédent</Col>
            <Col className="d-flex justify-content-start">
              <img src={ArrowLeft} alt="Arrow Left" ref={refLast} />
            </Col>
          </Link>
        )}
        {nextProject[0] && (
          <Link
            to={`${nextProject[0].path}`}
            className="link-switch-project-right"
          >
            <Col className="d-flex justify-content-end">
              <img src={ArrowRight} alt="Arrow Right" ref={refNext} />
            </Col>
            <Col className="text-left">Projet suivant</Col>
          </Link>
        )}
      </Row>
    </Container>
  );
}

Pagination.defaultProps = {
  currentId: 0,
};

Pagination.propTypes = {
  currentId: PropTypes.number,
};
