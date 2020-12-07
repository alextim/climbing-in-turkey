import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testimonial from 'components/Testimonial';
import SectionHeader from 'components/SectionHeader';
import PageSection from 'components/PageSection';
import './Testimonials.scss';

const Testimonials = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    testimonials,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {testimonials.map(({ name, image, ...rest }) => (
          <Col md={4} key={name}>
            <Testimonial name={name} image={image?.mobile?.childImageSharp.fluid} alt={image?.alt} {...rest} />
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
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Testimonials.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Testimonials;
