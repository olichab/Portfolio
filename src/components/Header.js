import React, { useState } from 'react';
import { Navbar, Nav, NavbarBrand, Collapse, NavItem, Media } from 'reactstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import SocialNetwork from './SocialNetwork';
import logo from '../assets/images/logos/logo_oc.svg';
import home from '../assets/images/pictos/home.svg';

import '../scss/Header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar expand='lg' fixed='top' className='header-container'>
      <NavbarBrand tag={Link} to='/'>
        <Media
          object
          src={logo}
          alt='logo olivier chabot'
          className='logo-oc'
          onClick={scrollToTop}
        />
      </NavbarBrand>
      <button
        type='button'
        className={`btn-menu ${isOpen ? 'active' : 'not-active'}`}
        onClick={toggleNavbar}
      >
        <span />
        <span />
        <span />
      </button>
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Link
              className='nav-link'
              activeClass='active'
              to='anchorHomePart'
              spy
              smooth='easeInOutQuad'
              duration={750}
              onClick={closeMenu}
            >
              <Media object src={home} alt='home' className='picto-home' />
            </Link>
          </NavItem>
          <NavItem onClick={toggleNavbar}>
            <Link
              className='nav-link'
              activeClass='active'
              to='anchorBioPart'
              spy
              smooth='easeInOutQuad'
              duration={750}
              onClick={closeMenu}
            >
              A PROPOS
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              activeClass='active'
              to='anchorProjetsPart'
              spy
              smooth='easeInOutQuad'
              duration={750}
              onClick={closeMenu}
            >
              PROJETS
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              activeClass='active'
              to='anchorContactPart'
              spy
              smooth
              duration={750}
              onClick={closeMenu}
            >
              CONTACT
            </Link>
          </NavItem>
          <NavItem>
            <SocialNetwork />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
