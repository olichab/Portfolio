import React from "react";
import { Container, Row, Col } from "reactstrap";
import Projet from "./Projet";
import PROJECTS_LIST from "./helpers/projectsList";

import "../scss/Projets.scss";

export default function Projets() {
  return (
    <Container className="container-projets" fluid="sm" id="projets">
      <Row className="p-3 p-md-5">
        <Col>
          <h1>PROJETS</h1>
        </Col>
      </Row>
      <Row className="justify-content-center  no-gutters">
        {PROJECTS_LIST.map((project) => {
          return (
            <Col xs="12" md="6" lg="4" key={project.title}>
              <Projet
                thumbnail={project.thumbnail}
                title={project.title}
                location={project.location}
                path={project.path}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
