import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

import SectionHeader from '../../../components/SectionHeader';
import PageSection from '../../../components/PageSection';
import ServiceItem from './ServiceItem';

const Services = ({ className, frontmatter, images }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, items } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      <Row>
        {items.map(({ header, content, alt }, index) => (
          <ServiceItem key={header} header={header} content={content} image={images[index].default} alt={alt}  />
        ))}
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.shape({
    default: PropTypes.object,
  })).isRequired,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
