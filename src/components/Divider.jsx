import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ light }) => 
  <hr className={`divider${light ? ' light' : ''}`} />

Divider.propTypes = {
  light: PropTypes.bool,
};

Divider.defaultProps = {
  light: false,
};

export default Divider;
