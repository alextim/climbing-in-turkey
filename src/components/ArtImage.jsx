import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

const ArtImage = ({ defaultImage, desktopImage, alt, ...restProps }) => {
  if (!defaultImage || !desktopImage) {
    return null;
  }

  const sources = [
    defaultImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: '(min-width: 500px)',
    },
  ];
  return <Img alt={alt} fluid={sources} {...restProps} />;
};

ArtImage.propTypes = {
  defaultImage: PropTypes.object.isRequired,
  desktopImage: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

ArtImage.defaultProps = {
  alt: null,
};

export default ArtImage;
