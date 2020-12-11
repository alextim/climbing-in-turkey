/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Img from 'gatsby-image';

import './carousel.scss';

const GalleryCarousel = ({ items, current }) => (
  <Carousel interval={null} indicators={false} defaultActiveIndex={current} slide={false}>
    {
      items.map(({ desktop, alt }, i) =>
        <Carousel.Item key={i}>
          <figure>
            <Img fluid={desktop.childImageSharp.fluid} alt={alt} />
            <figcaption>
              <div className="bottom-bar">
                <div className="counter">{i + 1} of {items.length}</div>
              </div>
            </figcaption>
          </figure>
        </Carousel.Item>
      )
    }
  </Carousel>
);

GalleryCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
};

export default GalleryCarousel;
