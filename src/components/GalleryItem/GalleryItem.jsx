import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Img from 'gatsby-image';

import './GalleryItem.scss';

const GalleryItem = ({
  header,
  subheader,
  image,
  index,
  handlePortfolioClick,
}) => (
  <Col lg={3} sm={6} className="gallery-item">
    <a
      role="button"
      tabIndex={-1}
      className="gallery-box"
      onClick={(e) => handlePortfolioClick(e, index)}
      href={image?.desktop?.publicURL}
    >
        {image && image.default && <Img fluid={image.default.childImageSharp.fluid} alt={image.alt} />}
      <div className="gallery-box-caption">
        <div className="project-category text-white-50">
          {subheader}
        </div>
        <div className="project-name">
          {header}
        </div>
      </div>
    </a>
  </Col>
);

GalleryItem.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  image: PropTypes.object,
  index: PropTypes.number,
  handlePortfolioClick: PropTypes.object,
};

GalleryItem.defaultProps = {
  subheader: '',
  image: null,
  index: null,
  handlePortfolioClick: null,
};

export default GalleryItem;
