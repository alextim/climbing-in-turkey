import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Col from 'react-bootstrap/Col';

import './SectionHeader.scss';

const SectionHeader = ({ header, subheader, content, className, subClassName, ...rest }) => (
  <Col lg={12} className={clsx('section-header', 'text-center', className)} {...rest}>
    <div className="d-flex flex-column-reverse">
      <h2 className={clsx('section-subheading', subClassName)}>{subheader}</h2>
      <h3 className="section-heading text-uppercase divider">{header}</h3>
    </div>
    {content && (
      <div className={clsx('section-content', 'text-justify', subClassName)}>{content}</div>
    )}
  </Col>
);

SectionHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  subClassName: PropTypes.string,
};

SectionHeader.defaultProps = {
  header: '',
  subheader: '',
  content: '',
  className: null,
  subClassName: 'text-muted',
};

export default SectionHeader;
