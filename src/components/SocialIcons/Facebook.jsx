import React from 'react';
import PropTypes from 'prop-types';

import CircleIcon from 'components/CircleIcon2';
import FacebookIcon from '../../assets/icons/facebook-f.svg';

const iconStyle = {
  width: '1rem',
  height: '1rem',
};
const Facebook = ({ userName }) => (
  <CircleIcon href={`https://facebook.com/${userName}`} label="Facebook">
    <FacebookIcon style={iconStyle} />
  </CircleIcon>
);

Facebook.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Facebook;
