import React, { useEffect, useRef } from "react";
import { playTlSocialNetworks } from "../timelines";

import logoLinkedIn from "../assets/images/logos/linkedin.svg";
import logoGithub from "../assets/images/logos/github.svg";
import logoInstagram from "../assets/images/logos/instagram.svg";

const SocialNetwork = () => {
  const wrapperLogo = useRef(null);
  const refLogoLinkedin = useRef(null);
  const refLogoGithub = useRef(null);
  const refLogoInstagram = useRef(null);
  useEffect(() => {
    playTlSocialNetworks(
      wrapperLogo,
      refLogoLinkedin,
      refLogoGithub,
      refLogoInstagram
    );
  }, []);

  return (
    <div className="container-social-network" ref={wrapperLogo}>
      <button
        type="button"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/olichab",
            "_blank",
            "noopener"
          )
        }
        onKeyPress={() =>
          window.open(
            "https://www.linkedin.com/in/olichab",
            "_blank",
            "noopener"
          )
        }
      >
        <img
          ref={refLogoLinkedin}
          src={logoLinkedIn}
          alt="logo linkedin"
          className="logo-linked-in"
        />
      </button>
      <button
        type="button"
        onClick={() =>
          window.open("https://github.com/olichab", "_blank", "noopener")
        }
        onKeyPress={() =>
          window.open("https://github.com/olichab", "_blank", "noopener")
        }
      >
        <img
          ref={refLogoGithub}
          src={logoGithub}
          alt="logo github"
          className="logo-github"
        />
      </button>
      <button
        type="button"
        onClick={() =>
          window.open(
            "https://www.instagram.com/devandco/",
            "_blank",
            "noopener"
          )
        }
        onKeyPress={() =>
          window.open(
            "https://www.instagram.com/devandco/",
            "_blank",
            "noopener"
          )
        }
      >
        <img
          ref={refLogoInstagram}
          src={logoInstagram}
          alt="logo instagram"
          className="logo-instagram"
        />
      </button>
    </div>
  );
};

export default SocialNetwork;
