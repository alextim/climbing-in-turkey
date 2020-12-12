import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import SocialIcon from 'components/SocialIcon';
import useSocialLinks from '../../hooks/useSocialLinksArray';

const Footer = ({ frontmatter }) => {
  const socialLinks = useSocialLinks();
  const {
    copyright,
  } = frontmatter;

  return (
    <footer className="footer py-3 bg-light">
      <Container>
        <Row className="align-items-center text-center my-5">
          <Col>
            {socialLinks.map(({ code, to, title }) => <SocialIcon key={code} code={code} to={to} title={title} />)}
          </Col>
        </Row>
        <Row className="align-items-center text-center small">
          <Col className="text-lg-left">
            Copyright &copy;{` ${new Date().getFullYear()} ${copyright}`}
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
