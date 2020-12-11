import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

import ServiceItem from 'components/ServiceItemV';
import SectionHeader from 'components/SectionHeader';
import PageSection from 'components/PageSection/PageSection';

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, services } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      <Row>
        {services.map((service) => (
          <ServiceItem key={service.header} {...service} />
        ))}
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
