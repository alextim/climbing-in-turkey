import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import SocialIcon from '../../components/SocialIcon';

import useSocialLinks from '../../hooks/useSocialLinksArray';
import useOrgAddress from '../../hooks/useOrgAddress';
import useOrgContacts from '../../hooks/useOrgContacts';

const Footer = () => {
  const socialLinks = useSocialLinks();
  const address = useOrgAddress();
  const { foundingDate } = useOrgContacts();
  const currentYear = new Date().getFullYear();

  let s = '';
  if (foundingDate) {
    const foundingYear = new Date(foundingDate).getFullYear();
    if (foundingYear !== currentYear) {
      s = `${foundingYear}-`;
    }
  }

  return (
    <footer className="footer py-3 bg-light">
      <Container>
        <Row className="align-items-center text-center my-5">
          <Col>
            {socialLinks.map(({ code, to, title }) => (
              <SocialIcon key={code} code={code} to={to} title={title} />
            ))}
          </Col>
        </Row>
        <Row className="align-items-center text-center small">
          <Col className="text-lg-left">{`© ${s}${currentYear} ${address?.name}`}</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
