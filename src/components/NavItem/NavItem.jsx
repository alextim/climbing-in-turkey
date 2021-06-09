import React from 'react';
import PropTypes from 'prop-types';

import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

import './NavItem.scss';

const NavItem = ({ to, onClick, children }) => (
  <Nav.Item>
    <Link
      className="nav-link cursor-pointer"
      activeClass="active"
      to={to}
      spy
      smooth="easeInOutQuart"
      onClick={onClick}
    >
      {children || to}
    </Link>
  </Nav.Item>
);

NavItem.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

NavItem.defaultProps = {
  to: '',
  onClick: null,
  children: null,
};

export default NavItem;
