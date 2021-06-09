/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './carousel.scss';

const GalleryCarousel = ({ items, current }) => (
  <Carousel interval={null} indicators={false} defaultActiveIndex={current} slide={false}>
    {items.map(({ xl, alt }, i) => (
      <Carousel.Item key={i}>
        <figure>
          <GatsbyImage image={getImage(xl)} alt={alt} />
          <figcaption>
            <div className="bottom-bar">
              <div className="counter">
                {i + 1} of {items.length}
              </div>
            </div>
          </figcaption>
        </figure>
      </Carousel.Item>
    ))}
  </Carousel>
);

GalleryCarousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
};

export default GalleryCarousel;
