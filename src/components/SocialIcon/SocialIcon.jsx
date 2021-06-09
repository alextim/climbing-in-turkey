import React from 'react';
import PropTypes from 'prop-types';

import CircleIcon from '../CircleIcon/CircleIcon';

import FacebookIcon from '../../assets/fa/brand/facebook-f.svg';
import InstagramIcon from '../../assets/fa/brand/instagram.svg';
import VkIcon from '../../assets/fa/brand/vk.svg';

const Icon = ({ code }) => {
  const c = 'fa-x2';
  switch (code) {
    case 'instagram':
      return <InstagramIcon className={c} />;
    case 'facebook':
      return <FacebookIcon className={c} />;
    case 'vk':
      return <VkIcon className={c} />;
    default:
      throw new Error(`Uknownn ${code}`);
  }
};

const SocialIcon = ({ to, title, code }) => (
  <CircleIcon href={to} label={title}>
    <Icon code={code} />
  </CircleIcon>
);

SocialIcon.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.node.isRequired,
};

export default SocialIcon;
