/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';

const ArtImage = ({ smImage, xlImage, alt, ...rest }) => {
  if (!smImage || !xlImage) {
    return null;
  }

  const sources = withArtDirection(getImage(smImage), [
    {
      image: getImage(xlImage),
      media: '(min-width: 480px)',
    },
  ]);
  return <GatsbyImage alt={alt} image={sources} {...rest} />;
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
