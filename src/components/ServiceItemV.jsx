import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Col from 'react-bootstrap/Col';

const ServiceItemV = ({ image, header, content }) => (
  <Col lg={3} className="text-center mb-4">
    {image && image.default && <Img className="mb-3" fluid={{ ...image.default.childImageSharp.fluid, aspectRatio: 3 / 4}} alt={image.alt} />}
    <h4>{header}</h4>
    <p className="text-muted">{content}</p>
  </Col>
);

ServiceItemV.propTypes = {
  image: PropTypes.object,
  header: PropTypes.string,
  content: PropTypes.string,
};

ServiceItemV.defaultProps = {
  image: null,
  header: '',
  content: '',
};

export default ServiceItemV;
