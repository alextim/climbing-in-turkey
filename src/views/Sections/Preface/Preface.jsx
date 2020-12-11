import React from 'react';
import PropTypes from 'prop-types';

import PageSection from 'components/PageSection';

import './Preface.scss';

const Preface = ({ className, html }) => {
  if (!html) {
    return null;
  }

  return (
    <PageSection className={className}>
      <div dangerouslySetInnerHTML={{ __html: html }} className="text-justify text-muted" />
    </PageSection>
  );
};

Preface.propTypes = {
  className: PropTypes.string,
  html: PropTypes.string,
};

Preface.defaultProps = {
  className: null,
  html: null,
};

export default Preface;
