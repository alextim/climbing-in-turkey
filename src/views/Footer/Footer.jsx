import React from "react";
import PropTypes from "prop-types";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import * as SocialIcons from 'components/SocialIcons';

import useSocialLinks from '../../hooks/useSocialLinks';

const Footer = ({ frontmatter }) => {
  const socialLinks = useSocialLinks();
  
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={3} className="my-3 my-lg-0">
            {socialLinks.instagram ? <SocialIcons.Instagram to={socialLinks.instagram.to} title={socialLinks.instagram.title} /> : null}
            {socialLinks.facebook ? <SocialIcons.Facebook to={socialLinks.facebook.to}  title={socialLinks.facebook.title} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <a className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
            <a href={termsHref}>{termsText}</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
