import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Col from 'react-bootstrap/Col';

const ServiceItemV = ({ header, content, image, alt }) => (
  <Col lg={4} className="text-center mb-4">
    {image && <GatsbyImage className="mb-3" image={getImage(image)} alt={alt} />}
    <h4>{header}</h4>
    <p className="text-muted">{content}</p>
  </Col>
);

ServiceItemV.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  alt: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
};

ServiceItemV.defaultProps = {
  image: null,
  alt: null,
  header: '',
  content: '',
};

export default ServiceItemV;
