import React from 'react';
import PropTypes from 'prop-types';

import CircleIcon from 'components/CircleIcon2';
import FacebookIcon from '../../assets/icons/facebook-f.svg';

const iconStyle = {
  width: '1rem',
  height: '1rem',
};
const Facebook = ({ to, title }) => (
  <CircleIcon href={to} label={title}>
    <FacebookIcon style={iconStyle} />
  </CircleIcon>
);

Facebook.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Facebook;
