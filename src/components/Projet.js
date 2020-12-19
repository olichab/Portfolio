import React, { useState, useRef, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Col } from "reactstrap";
import LazyLoad from "react-lazyload";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { playTlProjet } from "../timelines";

import pictoChevron from "../assets/images/pictos/chevron.svg";
import "../scss/Projet.scss";

const Projet = ({ id, thumbnail, title, location, path }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const refProjet = useRef(null);
  const refcaptionContainer = useRef(null);
  const refTitle = useRef(null);
  const refLocation = useRef(null);
  const refButton = useRef(null);

  const imgIsLoaded = useCallback(() => {
    setImgLoaded(true);
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    playTlProjet(
      refProjet,
      refTitle,
      refLocation,
      refButton,
      refcaptionContainer
    );
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [refProjet, refTitle, refLocation, refButton, refcaptionContainer]);

  return (
    <>
      <div className="row projet" ref={refProjet}>
        <Helmet>
          <title>Projets</title>
          <meta
            name="description"
            content="Développement web ou infographie 3D, retrouvez les projets sur lesquels j'ai pu travailler et m'exercer."
          />
        </Helmet>
        <Col xs="12" md="7" lg="6" xl="8" className="p-0">
          <LazyLoad height={thumbnail.height} offset={1000}>
            <img
              src={imgLoaded ? thumbnail.url : thumbnail.urlSD}
              alt={`Project ${title}`}
              onLoad={imgIsLoaded}
              width="320px"
              height="180px"
            />
          </LazyLoad>
        </Col>
        <Col xs="12" md="3" lg="4" className="col-projet-caption">
          <div className="row caption" ref={refcaptionContainer}>
            <Col xs="10" md="12" className="p-3">
              <h1 className="caption-title" ref={refTitle}>
                {title}
              </h1>
              <p className="caption-location" ref={refLocation}>
                {location}
              </p>
            </Col>
            <Col xs="2" className="col-projet-chevron d-md-none">
              <NavLink to={path} className="link-unstyled">
                <img
                  src={pictoChevron}
                  alt="chevron"
                  className="chevron"
                  width="25px"
                  height="25px"
                />
              </NavLink>
            </Col>
            <div
              className="col col-md-12 d-none d-md-flex justify-content-end"
              ref={refButton}
            >
              <NavLink to={path} className="link-unstyled btn-see-project">
                Voir le projet
              </NavLink>
            </div>
          </div>
        </Col>
      </div>
      <hr />
    </>
  );
};

Projet.defaultProps = {
  id: 0,
  thumbnail: {},
  title: "",
  location: "",
  path: "",
};

Projet.propTypes = {
  id: PropTypes.number,
  thumbnail: PropTypes.shape({
    url: PropTypes.string,
    urlSD: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  title: PropTypes.string,
  location: PropTypes.string,
  path: PropTypes.string,
};

export default Projet;
