import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testimonial from 'components/Testimonial';
import SectionHeader from 'components/SectionHeader';
import PageSection from 'components/PageSection/PageSection';
import './Testimonials.scss';

const Testimonials = ({ className, frontmatter, images }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    items,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {items.map(({ header, image: { alt }, ...rest }, index) => (
          <Col md={4} key={header}>
            <Testimonial header={header} image={images[index]?.default?.childImageSharp.fluid} alt={alt} {...rest} />
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
  images: PropTypes.arrayOf(PropTypes.shape({
    default: PropTypes.object,
  })).isRequired,
};

Testimonials.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Testimonials;
