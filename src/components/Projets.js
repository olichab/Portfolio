import React from "react";
import { Container, Row, Col } from "reactstrap";
import Projet from "./Projet";
import listProjects from "./helpers/listProjects";

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
        {listProjects.map((project) => {
          return (
            <Col xs="12" md="6" lg="4" key={project.title}>
              <Projet
                thumbnail={project.urlThumbnail}
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
