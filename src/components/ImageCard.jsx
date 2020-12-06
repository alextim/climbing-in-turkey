import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Card } from 'react-bootstrap';
import ArtImage from 'components/ArtImage';
import './ImageCard.scss';

const ImageCard = ({ className, mobileImage, desktopImage, imageAlt, header, subheader, extraInfo }) => (
  <Card className={clsx('image-card bg-dark text-white text-center', className)}>
    <ArtImage className="image" mobileImage={mobileImage} desktopImage={desktopImage} alt={imageAlt || header || subheader} fadeIn={false} loading="eager" />
    <Card.ImgOverlay className="no-padding">
      <Container>
        <div className="intro-text">
          <div className="intro-lead-in">{subheader}</div>
          <div className="intro-heading text-uppercase">{header}</div>
          {extraInfo}
        </div>
      </Container>
    </Card.ImgOverlay>
  </Card>
);

ImageCard.propTypes = {
  className: PropTypes.string,
  mobileImage: PropTypes.object,
  desktopImage: PropTypes.object,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  mobileImage: null,
  desktopImage: null,
  imageAlt: null,
  header: '',
  subheader: '',
  extraInfo: null,
};

export default ImageCard;
