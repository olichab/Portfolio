import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Navbar, Nav, Collapse, NavItem, Media } from 'reactstrap';
import smoothscroll from 'smoothscroll-polyfill';
import SocialNetwork from './SocialNetwork';
import logo from '../assets/images/logos/logo_oc.svg';
import home from '../assets/images/pictos/home.svg';

import '../scss/Header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  smoothscroll.polyfill();

  return (
    <Navbar expand='lg' fixed='top' className='header-container'>
      <NavLink to='/#home' smooth='true'>
        <Media
          object
          src={logo}
          className='logo-oc'
          alt='logo olivier chabot'
        />
      </NavLink>
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
          <NavItem onClick={closeMenu}>
            <NavLink className='nav-link' to='/#home' smooth='true'>
              <Media object src={home} alt='home' className='picto-home' />
            </NavLink>
          </NavItem>
          <NavItem onClick={closeMenu}>
            <NavLink className='nav-link' to='/#bio' smooth='true'>
              BIO
            </NavLink>
          </NavItem>
          <NavItem onClick={closeMenu}>
            <NavLink className='nav-link' to='/#projets' smooth='true'>
              PROJETS
            </NavLink>
          </NavItem>
          <NavItem onClick={closeMenu}>
            <NavLink className='nav-link' to='/#contact' smooth='true'>
              CONTACT
            </NavLink>
          </NavItem>
          <NavItem>
            <SocialNetwork />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
