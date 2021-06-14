import React from 'react';
import PropTypes from 'prop-types';

import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

import './NavItem.scss';

const NavItem = ({ to, title, onClick }) => (
  <Nav.Item>
    <Link
      className="nav-link cursor-pointer"
      activeClass="active"
      to={to}
      spy
      smooth="easeInOutQuart"
      onClick={onClick}
    >
      {title}
    </Link>
  </Nav.Item>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  onClick: null,
};

export default NavItem;
