import React from "react";
import { Media } from "reactstrap";
import logoLinkedIn from "../assets/images/logos/linkedin.svg";
import logoGithub from "../assets/images/logos/github.svg";
import logoInstagram from "../assets/images/logos/instagram.svg";

import "../scss/SocialNetwork.scss";

export default function SocialNetwork() {
  return (
    <div className="container-social-network">
      <Media
        object
        src={logoLinkedIn}
        alt="logo linkedin"
        className="logo-linked-in hvr-grow"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/olichab",
            "_blank",
            "noopener"
          )
        }
      />
      <Media
        object
        src={logoGithub}
        alt="logo github"
        className="logo-github hvr-grow"
        onClick={() =>
          window.open("https://github.com/olichab", "_blank", "noopener")
        }
      />
      <Media
        object
        src={logoInstagram}
        alt="logo instagram"
        className="logo-instagram hvr-grow"
        onClick={() =>
          window.open(
            "https://www.instagram.com/devandco/",
            "_blank",
            "noopener"
          )
        }
      />
    </div>
  );
}
