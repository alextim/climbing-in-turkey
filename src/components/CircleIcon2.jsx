import React from 'react';
import PropTypes from 'prop-types';

import './CircleIcon.scss';

const CircleIcon2 = ({ href, label, children }) => (
  <a
    className="circle-icon"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    {children}
  </a>
);

CircleIcon2.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CircleIcon2.defaultProps = {
  href: '',
  label: null,
};

export default CircleIcon2;
