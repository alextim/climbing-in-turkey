import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'gatsby-image';

import SectionHeader from '../../../components/SectionHeader';
import PageSection from '../../../components/PageSection';

import './About.scss';

const About = ({ html, frontmatter, images }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, alt } = frontmatter;

  return (
    <PageSection className="bg-light" id={anchor}>
      <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      <Row>
        {images && images.default && (
          <Col lg={4}>
            <Img fluid={images.default.childImageSharp.fluid} alt={alt} className="about-image mx-auto mb-3" />
          </Col>
        )}
        {html && (
          <Col lg={8}>
            <div dangerouslySetInnerHTML={{ __html: html }} className="text-justify text-muted" />
          </Col>
        )}
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  frontmatter: PropTypes.object,
  html: PropTypes.string,
  images: PropTypes.shape({
    default: PropTypes.object,
  }).isRequired,
};

About.defaultProps = {
  frontmatter: null,
  html: null,
};

export default About;
