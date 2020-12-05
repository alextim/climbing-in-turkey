import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import './Testimonial.scss';

const Testimonial = ({
  image,
  alt,
  name,
  cite,
  content,
}) => {
  return (
    <figure className="team-member">
      {image && <Img
        className="mx-auto circle rounded-circle"
        fluid={image}
        alt={alt || name || content}
      />}
      <blockquote className="blockquote">
        <p className="text-muted">
          {content}
        </p>
      </blockquote>
      <figcaption className="blockquote-footer">
        {name}
        {cite &&
          <>
            ,{' '}
            <cite>{cite}</cite>
          </>
        }
      </figcaption>
    </figure>
  );
};

Testimonial.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  name: PropTypes.string,
  cite: PropTypes.string,
  content: PropTypes.string,
};

Testimonial.defaultProps = {
  image: undefined,
  alt: null,
  name: '',
  cite: '',
  content: '',
};

export default Testimonial;
