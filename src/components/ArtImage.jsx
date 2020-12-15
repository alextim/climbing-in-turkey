import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

const ArtImage = ({ smImage, xlImage, alt, ...restProps }) => {
  if (!smImage || !xlImage) {
    return null;
  }

  const sources = [
    smImage.childImageSharp.fluid,
    {
      ...xlImage.childImageSharp.fluid,
      media: '(min-width: 480px)',
    },
  ];
  return <Img alt={alt} fluid={sources} {...restProps} />;
};

ArtImage.propTypes = {
  smImage: PropTypes.object.isRequired,
  xlImage: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

ArtImage.defaultProps = {
  alt: null,
};

export default ArtImage;
