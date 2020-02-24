import React from "react";
import TrackVisibility from "react-on-screen";
import Intro from "./Intro";
import Bio from "./Bio";
import Projets from "./Projets";
import Contact from "./Contact";

import "../scss/Homepage.scss";

const BioPartAnimate = ({ isVisible }) => {
  return (
    <div className={`bio-part-animate ${isVisible ? "is-visible" : ""}`}>
      <Bio />
    </div>
  );
};
const ProjetsPartAnimate = ({ isVisible }) => {
  return (
    <div className={`projets-part-animate ${isVisible ? "is-visible" : ""}`}>
      <Projets />
    </div>
  );
};
const ContactPartAnimate = ({ isVisible }) => {
  return (
    <div className={`contact-part-animate ${isVisible ? "is-visible" : ""}`}>
      <Contact />
    </div>
  );
};

export default function Homepage() {
  return (
    <>
      <Intro />
      <TrackVisibility offset={1000}>
        <BioPartAnimate />
      </TrackVisibility>
      <TrackVisibility offset={800}>
        <ProjetsPartAnimate />
      </TrackVisibility>
      <TrackVisibility offset={600}>
        <ContactPartAnimate />
      </TrackVisibility>
    </>
  );
}
