import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import ImageCard from '../../components/ImageCard/ImageCard';
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

const Top = ({ images, frontmatter }) => {
  if (!frontmatter || !images) {
    return null;
  }

  const { header, subheader, alt, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
        {jumpToAnchorText}
      </Button>
    );
  }

  return (
    <ImageCard
      xlImage={images.xl}
      smImage={images.sm}
      imageAlt={alt}
      header={header}
      headerTag="h1"
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.shape({
    header: PropTypes.string,
    subheader: PropTypes.string,
    alt: PropTypes.string,
    jumpToAnchor: PropTypes.string,
    jumpToAnchorText: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
  images: null,
};

export default Top;
