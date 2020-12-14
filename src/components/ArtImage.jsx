import React from "react";
import PropTypes from "prop-types";

import Img from "gatsby-image";

const ArtImage = ({ xsImage, xlImage, alt, ...restProps }) => {
  if (!xsImage || !xlImage) {
    return null;
  }

  const sources = [
    xsImage.childImageSharp.fluid,
    {
      ...xlImage.childImageSharp.fluid,
      media: "(min-width: 500px)",
    },
  ];
  return <Img alt={alt} fluid={sources} {...restProps} />;
};

ArtImage.propTypes = {
  xsImage: PropTypes.object.isRequired,
  xlImage: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

ArtImage.defaultProps = {
  alt: null,
};

export default ArtImage;
