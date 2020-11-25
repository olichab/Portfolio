import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialNetwork from "./SocialNetwork";
import { useViewport } from "../hooks/useViewport";
import { playTlProgressBar } from "../timelines";
import Projet from "./Projet";
import PROJECTS_LIST from "./helpers/projectsList";
import "../scss/Projets.scss";

const Projets = () => {
  const refProgressBarProjects = useRef(null);
  const { width } = useViewport();
  const breakpoint = 992;

  useEffect(() => {
    playTlProgressBar(refProgressBarProjects);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <>
      <span className="progress-bar-projects" ref={refProgressBarProjects} />
      {width > breakpoint && <SocialNetwork />}
      <Container fluid="xl" className="projets-container">
        {PROJECTS_LIST.map((project) => {
          return (
            <Projet
              key={project.id}
              id={project.id}
              thumbnail={project.thumbnail}
              title={project.title}
              location={project.location}
              path={project.path}
            />
          );
        })}
      </Container>
    </>
  );
};
export default Projets;
