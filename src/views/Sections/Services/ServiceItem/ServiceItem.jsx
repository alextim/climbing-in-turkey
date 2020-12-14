import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import './ServiceItem.scss';

const ServiceItem = ({ odd, image, header, content }) => {
  return (
    <div className={`service-item service-item-${odd ? 'odd' : 'even'}`}>
      <div className="service-item-image-part">
        {image && image.src && <Img className="service-item-image" fluid={image.src.childImageSharp.fluid} alt={image.alt} />}
      </div>
      <div className={`service-item-text-part service-item-text-${odd ? 'odd' : 'even'}`}>
        <div>
          <h4 className="service-item-heading">{header}</h4>
          <p className="text-muted">{content}</p>
        </div>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  odd: PropTypes.number.isRequired,
  image: PropTypes.object,
  header: PropTypes.string,
  content: PropTypes.string,
};

ServiceItem.defaultProps = {
  image: null,
  header: '',
  content: '',
};

export default ServiceItem;
