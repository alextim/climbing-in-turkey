import React from 'react';
import PropTypes from 'prop-types';

import './CircleFAButton.scss';

import LaptopIcon from '../assets/icons/laptop.svg';
import LockIcon from '../assets/icons/lock.svg';
import ShoppingCartIcon from '../assets/icons/shopping-cart.svg';

const iconStyle = {
  width: '4rem',
  height: '4rem',
};
const CircleFAButton2 = ({ iconName }) => {
  let icon;
  switch (iconName) {
    case 'LaptopIcon':
      icon = <LaptopIcon style={iconStyle}/>
      break;
    case 'ShoppingCartIcon':
      icon = <ShoppingCartIcon style={iconStyle} />
      break;
    case 'LockIcon':
      icon = <LockIcon style={iconStyle} />
      break;
    default:
      break;
  }
  return (
    <div className="circle-fa-button">
      {icon}
    </div>
  );
};

CircleFAButton2.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default CircleFAButton2;
