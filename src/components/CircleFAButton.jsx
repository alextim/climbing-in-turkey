import React from 'react';
import PropTypes from 'prop-types';

import './CircleFAButton.scss';

import LaptopIcon from '../assets/fa/solid/laptop.svg';
import LockIcon from '../assets/fa/solid/lock.svg';
import ShoppingCartIcon from '../assets/fa/solid/shopping-cart.svg';

const CircleFAButton = ({ iconName }) => {
  let icon;
  switch (iconName) {
    case 'LaptopIcon':
      icon = <LaptopIcon className="fa-x4" />
      break;
    case 'ShoppingCartIcon':
      icon = <ShoppingCartIcon className="fa-x4" />
      break;
    case 'LockIcon':
      icon = <LockIcon className="fa-x4" />
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

CircleFAButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default CircleFAButton;
