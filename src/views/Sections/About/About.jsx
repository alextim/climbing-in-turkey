import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'gatsby-image';

import TimelineItem from 'components/TimelineItem';
import SectionHeader from 'components/SectionHeader';
import PageSection from 'components/PageSection';
import nl2br from 'utils/nl2br';

import './About.scss';

const About = ({ className, html, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, image, timeline } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {image && image.default && (
          <Col lg={4}>
            <Img fluid={image.default.childImageSharp.fluid} alt={image.alt} className="about-image mx-auto mb-3" />
          </Col>
        )}
        {html && (
          <Col lg={8}>
            <div dangerouslySetInnerHTML={{ __html: html }} className="text-justify text-muted" />
          </Col>
        )}
      </Row>
      {timeline && (
        <Row>
          <Col lg={12}>
            <ul className="timeline">
              {timeline.map(({ content, header, imageContent, imageFileName, subheader }, i) => (
                <TimelineItem
                  invert={i % 2}
                  key={header}
                  imageFileName={imageFileName}
                  header={header}
                  subheader={subheader}
                  content={content}
                  imageContent={
                    imageContent ? (
                      <div dangerouslySetInnerHTML={{ __html: `<h4>${nl2br(imageContent)}</h4>` }} />
                    ) : null
                  }
                />
              ))}
            </ul>
          </Col>
        </Row>
      )}  
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  html: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
  html: null,
};

export default About;
