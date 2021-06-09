import React from 'react';
import PropTypes from 'prop-types';

import './IconText.scss';

const IconText = ({ icon, text }) => (
  <div className="icon-text">
    {icon}
    {text}
  </div>
);

IconText.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconText;
