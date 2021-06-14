import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import PageSection from '../../../components/PageSection';
import ServiceItem from './ServiceItem';

const Services = ({
  frontmatter: {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    items,
  },
  images,
}) => (
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

Services.propTypes = {
  frontmatter: PropTypes.shape({
    anchor: PropTypes.string,
    header: PropTypes.string,
    subheader: PropTypes.string,
    content: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string,
        content: PropTypes.string,
        alt: PropTypes.string,
      }),
    ),
  }),
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
