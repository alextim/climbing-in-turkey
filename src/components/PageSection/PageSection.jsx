import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Container from 'react-bootstrap/Container';

import './PageSection.scss';

const PageSection = ({ children, className, containerClassName, fluid, ...rest }) => (
  <section className={clsx('page-section', className)} {...rest}>
    <Container fluid={fluid} className={containerClassName}>{children}</Container>
  </section>
);

PageSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  containerClassName: PropTypes.string,
};

PageSection.defaultProps = {
  children: null,
  className: null,
  fluid: false,
  containerClassName: null,
};

export default PageSection;
