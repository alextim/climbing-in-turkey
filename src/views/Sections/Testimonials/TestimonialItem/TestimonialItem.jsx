import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './TestimonialItem.scss';

const TestimonialItem = ({ image, alt, header, subheader, content }) => {
  return (
    <figure className="team-member">
      {image && (
        <GatsbyImage
          className="mx-auto circle rounded-circle"
          image={getImage(image)}
          alt={alt || header || content}
        />
      )}
      <blockquote className="blockquote">
        <p className="text-muted">{content}</p>
      </blockquote>
      <figcaption className="blockquote-footer text-muted">
        {header}
        {subheader && (
          <>
            , <cite>{subheader}</cite>
          </>
        )}
      </figcaption>
    </figure>
  );
};

TestimonialItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  alt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

TestimonialItem.defaultProps = {
  image: undefined,
  alt: null,
  header: '',
  subheader: '',
  content: '',
};

export default TestimonialItem;
