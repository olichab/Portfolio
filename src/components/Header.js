import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";
import { playTlHeader } from "../timelines";
import { useViewport } from "../hooks/useViewport";
import SocialNetwork from "./SocialNetwork";
import logo from "../assets/images/logos/logo_oc.svg";
import home from "../assets/images/pictos/home.svg";
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
      setIsOpen(!isOpen);
    }
  }, [isOpen, width]);

  useEffect(() => {
    if (isOpen && width < breakpoint) {
      playTlHeader(refCollapse, refNavLink, refSocialNetworks);
    }
  });

  return (
    <Navbar expand="lg" fixed="top" className="header-container">
      <NavLink to="/" className="mr-auto">
        <img src={logo} className="logo-oc" alt="logo olivier chabot" />
      </NavLink>
      <button
        type="button"
        className={`btn-menu ${isOpen ? "active" : "not-active"}`}
        onClick={toggleNavbar}
      >
        <span />
        <span />
        <span />
      </button>
      <Collapse isOpen={isOpen} navbar innerRef={refCollapse}>
        <Nav navbar className="ml-lg-auto">
          <NavItem>
            <NavLink className="nav-link m-2" to="/" onClick={toggleNavbar}>
              <img src={home} alt="home" className="picto-home" />
            </NavLink>
          </NavItem>
          {routes.map(({ to, label }, i) => {
            return (
              <NavItem key={to}>
                <NavLink
                  className="nav-link"
                  to={to}
                  activeClassName="selected"
                  onClick={toggleNavbar}
                  ref={(el) => (refNavLink.current[i] = el)}
                >
                  {label}
                </NavLink>
              </NavItem>
            );
          })}
          {width < breakpoint && (
            <div ref={refSocialNetworks} className="m-auto">
              <SocialNetwork />
            </div>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
