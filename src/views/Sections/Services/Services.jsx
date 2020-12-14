import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

import SectionHeader from '../../../components/SectionHeader';
import PageSection from '../../../components/PageSection';
import ServiceItem from './ServiceItem';

const Services = ({ frontmatter, images }) => {
  const { anchor, header: rootHeader, subheader: rootSubHeader, content: rootContent, items } = frontmatter;

  return (
    <PageSection className="" id={anchor}>
      <SectionHeader header={rootHeader} subheader={rootSubHeader} content={rootContent} />
      <Row>
        {items.map(({ header, content, alt }, index) => (
          <ServiceItem key={header} header={header} content={content} image={images[index].default} alt={alt}  />
        ))}
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  frontmatter: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.shape({
    default: PropTypes.object,
  })).isRequired,
};

Services.defaultProps = {
  frontmatter: null,
};

export default Services;
