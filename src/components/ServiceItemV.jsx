import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Col from 'react-bootstrap/Col';

const ServiceItemV = ({ header, content, image, alt }) => (
  <Col lg={3} className="text-center mb-4">
    {image && <Img className="mb-3" fluid={{ ...image.childImageSharp.fluid, aspectRatio: 3 / 4}} alt={alt} />}
    <h4>{header}</h4>
    <p className="text-muted">{content}</p>
  </Col>
);

ServiceItemV.propTypes = {
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
