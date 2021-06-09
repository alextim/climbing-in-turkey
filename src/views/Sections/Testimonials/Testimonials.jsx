/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import PageSection from '../../../components/PageSection';
import Testimonial from './Testimonial';

const Testimonials = ({ frontmatter, images }) => {
  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    items,
  } = frontmatter;

  return (
    <PageSection className="bg-light" id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {items.map(({ header, alt, ...rest }, index) => (
          <Col md={4} key={header}>
            <Testimonial header={header} image={images[index]?.sm} alt={alt} {...rest} />
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
};

Testimonials.propTypes = {
  frontmatter: PropTypes.object,
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
