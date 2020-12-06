import React from 'react';
import PropTypes from 'prop-types';


import CircleIcon from 'components/CircleIcon2';
import InstagramIcon from '../../assets/icons/instagram.svg';

const iconStyle = {
  width: '1rem',
  height: '1rem',
};

const Instagram = ({ userName }) => (
  <CircleIcon href={`https://instagram.com/${userName}`} label="Instagram">
    <InstagramIcon style={iconStyle}/>
  </CircleIcon>
);

Instagram.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Instagram;
