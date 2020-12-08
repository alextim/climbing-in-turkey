import React from 'react';
import PropTypes from 'prop-types';

import CircleFAButton from 'components/CircleFAButton';
import Image from 'components/Image';
import './ServiceItem.scss';

const ServiceItem = ({ iconName, imageFileName, header, content }) => (
  <>
    {iconName && <CircleFAButton iconName={iconName}/>}
    {imageFileName && <Image className="service-item-image" fileName={imageFileName} />}
    <h4 className="service-item-heading">{header}</h4>
    <p className="text-muted">{content}</p>
  </>
);

ServiceItem.propTypes = {
  iconName: PropTypes.node,
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
};

ServiceItem.defaultProps = {
  iconName: null,
  imageFileName: null,
  header: '',
  content: '',
};

export default ServiceItem;
