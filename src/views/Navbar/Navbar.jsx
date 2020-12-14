import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import useWindowOnScroll from 'hooks/useWindowOnScroll';
import useSmoothScrollTo from 'hooks/useSmoothScrollTo';
import NavItem from 'components/NavItem';

import './Navbar.scss';

const MyNavbar = ({ anchors, siteShortName, extraItems }) => {
  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = useState(false);
  const toggleMenu = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = useState(false);
  const handleWindowScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx('navbar-root', { 'navbar-shrink': shrink }, {'navbar-expanded': expanded})}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer pt-0 pb-0" onClick={handleBrandClick}>
          <img src="/assets/logo.svg" alt={siteShortName} height="42" width="75" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {anchors.map((anchor) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
          {extraItems}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.string),
  siteShortName: PropTypes.string.isRequired,
  extraItems: PropTypes.any,
};

MyNavbar.defaultProps = {
  anchors: [],
  extraItems: null,
};

export default MyNavbar;
