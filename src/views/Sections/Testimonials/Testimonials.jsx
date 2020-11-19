import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Testimonial from "components/Testimonial";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Testimonials.scss";

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
        {testimonials.map(({ name, ...tmProps }) => (
          <Col sm={4} key={name}>
            <Testimonial name={name} {...tmProps} />
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
