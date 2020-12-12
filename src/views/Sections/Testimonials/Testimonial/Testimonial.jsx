import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import './Testimonial.scss';

const Testimonial = ({
  image,
  alt,
  header,
  subheader,
  content,
}) => {
  return (
    <figure className="team-member">
      {image && <Img
        className="mx-auto circle rounded-circle"
        fluid={image}
        alt={alt || header || content}
      />}
      <blockquote className="blockquote">
        <p className="text-white">
          {content}
        </p>
      </blockquote>
      <figcaption className="blockquote-footer text-white">
        {header}
        {subheader &&
          <>
            ,{' '}
            <cite>{subheader}</cite>
          </>
        }
      </figcaption>
    </figure>
  );
};

Testimonial.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

Testimonial.defaultProps = {
  image: undefined,
  alt: null,
  header: '',
  subheader: '',
  content: '',
};

export default Testimonial;
