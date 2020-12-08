import React from 'react';
import PropTypes from 'prop-types';

import './CircleIcon.scss';

const CircleIcon = ({ href, label, children }) => (
  <a
    className="circle-icon"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
  >
    {children}
  </a>
);

CircleIcon.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CircleIcon.defaultProps = {
  href: '',
  label: null,
};

export default CircleIcon;
