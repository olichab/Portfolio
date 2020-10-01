import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";
import "../scss/Projet.scss";

export default function Projet({ thumbnail, title, location, path }) {
  const [showCaptionOnClick, setShowCaptionOnClick] = useState(false);

  const toggleCaption = () => setShowCaptionOnClick(!showCaptionOnClick);

  return (
    <div
      className="container-projet"
      onClick={toggleCaption}
      onKeyDown={toggleCaption}
      role="button"
      tabIndex={0}
    >
      <Media
        object
        src={thumbnail}
        alt={`Project ${title}`}
        className={`thumbnails ${
          showCaptionOnClick ? "thumbnails-on-click" : ""
        }`}
      />
      <div
        className={`caption ${showCaptionOnClick ? "caption-on-click" : ""}`}
      >
        <div className="blur" />
        <div className="caption-text">
          <p className="caption-title">{title}</p>
          <p className="caption-location">{location}</p>
          {path && (
            <Link
              to={path}
              className="link-unstyled btn-see-project hvr-sweep-to-right"
              smooth="true"
            >
              Voir le projet
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
