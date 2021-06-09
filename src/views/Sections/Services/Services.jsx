import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import PageSection from '../../../components/PageSection';
import ServiceItem from './ServiceItem';

const Services = ({ frontmatter, images }) => {
  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    items,
  } = frontmatter;

  return (
    <PageSection id={anchor}>
      <SectionHeader header={rootHeader} subheader={rootSubHeader} content={rootContent} />
      <Row>
        {items.map(({ header, content, alt }, index) => (
          <ServiceItem
            key={header}
            header={header}
            content={content}
            image={images[index].sm}
            alt={alt}
          />
        ))}
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  frontmatter: PropTypes.object,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      sm: PropTypes.object,
    }),
  ).isRequired,
};

Services.defaultProps = {
  frontmatter: null,
};

export default Services;
