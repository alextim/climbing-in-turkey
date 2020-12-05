import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

const ArtImage = ({ mobileImage, desktopImage, alt, ...restProps }) => {
  if (!mobileImage || !desktopImage) {
    return null;
  }

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: '(min-width: 500px)',
    },
  ];
  return <Img alt={alt} fluid={sources} {...restProps} />;
};

ArtImage.propTypes = {
  mobileImage: PropTypes.object.isRequired,
  desktopImage: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

ArtImage.defaultProps = {
  alt: null,
};

export default ArtImage;
