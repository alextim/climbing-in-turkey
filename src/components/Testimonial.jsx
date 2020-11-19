import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";

import "./Testimonial.scss";

const Testimonial = ({
  imageFileName,
  imageAlt,
  name,
  cite,
  content,
}) => {
  return (
    <figure className="team-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || name || content}
      />
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
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
  cite: PropTypes.string,
  content: PropTypes.string,
};

Testimonial.defaultProps = {
  imageAlt: null,
  name: "",
  cite: "",
  content: "",
};

export default Testimonial;
