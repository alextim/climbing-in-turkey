import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import ImageCard from 'components/ImageCard';
import useSmoothScrollTo from 'hooks/useSmoothScrollTo';

const Top = ({ image, frontmatter }) => {
  if (!frontmatter || !image) {
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
      xlImage={image.xl}
      smImage={image.sm}
      imageAlt={alt}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
  image: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
  image: null,
};

export default Top;
