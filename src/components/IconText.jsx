import React from 'react';
import PropTypes from 'prop-types';

import './IconText.scss';

const IconText = ({ icon, text }) => (
  <span className="icon-text">
    {icon}
    {text}
  </span>
);

IconText.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconText;
