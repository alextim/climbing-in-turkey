/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import PageSection from '../../../components/PageSection';
import TestimonialItem from './TestimonialItem';

const Testimonials = ({
  frontmatter: {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    items,
  },
  images,
}) => (
  <PageSection className="bg-light" id={anchor}>
    <Row>
      <SectionHeader header={rootHeader} subheader={rootSubHeader} />
    </Row>
    <Row>
      {items.map(({ alt, header: itemHeader, subheader: itemSubheader, content }, index) => (
        <Col md={4} key={itemHeader}>
          <TestimonialItem
            header={itemHeader}
            subheader={itemSubheader}
            content={content}
            image={images[index]?.sm}
            alt={alt}
          />
        </Col>
      ))}
    </Row>
    <Row>
      <Col lg={8} className="mx-auto text-center">
        <p className="large text-muted">{rootContent}</p>
      </Col>
    </Row>
  </PageSection>
);

Testimonials.propTypes = {
  frontmatter: PropTypes.shape({
    anchor: PropTypes.string,
    header: PropTypes.string,
    subheader: PropTypes.string,
    content: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string,
        subheader: PropTypes.string,
        content: PropTypes.string,
        alt: PropTypes.string,
      }),
    ),
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      sm: PropTypes.object,
    }),
  ).isRequired,
};

Testimonials.defaultProps = {
  frontmatter: null,
};

export default Testimonials;
