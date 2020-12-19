import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { playTlHeader } from "../timelines";
import { useViewport } from "../hooks/useViewport";
import SocialNetwork from "./SocialNetwork";
import logo from "../assets/images/logos/logo_oc.svg";
import "../scss/Header.scss";

const routes = [
  { to: "/bio", label: "BIO" },
  { to: "/projets", label: "PROJETS" },
  { to: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const refCollapse = useRef(null);
  const refNavLink = useRef([]);
  const refSocialNetworks = useRef([]);
  const { width } = useViewport();
  const breakpoint = 992;

  const toggleNavbar = useCallback(() => {
    if (width < breakpoint) {
      document.getElementById("navbarContent").style.display = "none";
      setIsOpen(!isOpen);
    }
  }, [isOpen, width]);

  useEffect(() => {
    if (isOpen) {
      document.getElementById("navbarContent").style.display = "block";
      playTlHeader(refCollapse, refNavLink, refSocialNetworks);
    }
  }, [isOpen]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top header-container">
      <NavLink to="/" className="mr-auto">
        <img
          src={logo}
          className="logo-oc"
          alt="logo olivier chabot"
          width="120px"
          height="30px"
        />
      </NavLink>
      <button
        type="button"
        className={`btn-menu ${
          isOpen ? "active" : "not-active"
        } navbar-toggler`}
        onClick={toggleNavbar}
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarContent"
        ref={refCollapse}
      >
        <ul
          className={`navbar-nav ${width > breakpoint ? "ml-auto" : "m-auto"}`}
        >
          {routes.map(({ to, label }, i) => {
            return (
              <li className="nav-item" key={to}>
                <NavLink
                  className="nav-link"
                  to={to}
                  activeClassName="selected"
                  onClick={toggleNavbar}
                  ref={(el) => (refNavLink.current[i] = el)}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
          {width < breakpoint && (
            <div ref={refSocialNetworks} className="m-auto">
              <SocialNetwork />
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
