/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Container from 'react-bootstrap/Container';

import ArtImage from '../ArtImage';
import './ImageCard.scss';

const ImageCard = ({ className, smImage, xlImage, imageAlt, header, subheader, extraInfo }) => (
  <div className={clsx('image-card bg-dark text-white text-center', className)}>
    <ArtImage
      className="image"
      smImage={smImage}
      xlImage={xlImage}
      alt={imageAlt || header || subheader}
      loading="eager"
    />
    <div className="image-card-overlay">
      <Container>
        <div className="intro-text">
          <div className="intro-lead-in">{subheader}</div>
          <div className="intro-heading text-uppercase">{header}</div>
          {extraInfo}
        </div>
      </Container>
    </div>
  </div>
);

ImageCard.propTypes = {
  className: PropTypes.string,
  smImage: PropTypes.object,
  xlImage: PropTypes.object,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  smImage: null,
  xlImage: null,
  imageAlt: null,
  header: '',
  subheader: '',
  extraInfo: null,
};

export default ImageCard;
