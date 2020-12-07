import React from 'react';
import PropTypes from 'prop-types';


import CircleIcon from 'components/CircleIcon2';
import InstagramIcon from '../../assets/icons/instagram.svg';

const iconStyle = {
  width: '1rem',
  height: '1rem',
};

const Instagram = ({ to, title }) => (
  <CircleIcon href={to} label={title}>
    <InstagramIcon style={iconStyle}/>
  </CircleIcon>
);

Instagram.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Instagram;
