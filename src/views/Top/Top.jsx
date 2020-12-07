import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import useSmoothScrollTo from 'hooks/useSmoothScrollTo';
import ImageCard from 'components/ImageCard';

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, image, jumpToAnchor, jumpToAnchorText } = frontmatter;
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

  const { mobile, desktop, alt } = image;

  return (
    <ImageCard
      desktopImage={desktop}
      mobileImage={mobile}
      imageAlt={alt}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
