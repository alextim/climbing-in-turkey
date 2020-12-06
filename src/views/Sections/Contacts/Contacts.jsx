import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';
import PageSection from 'components/PageSection';

import PhoneIcon from '../../../assets/icons/phone.svg';
import EnvelopeIcon from '../../../assets/icons/envelope.svg';

const Phone = ({ phone }) => (
  <a className="d-block" href={`tel:${phone}`}>
    {phone}
  </a>
);

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
};

const Contacts = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, phones, email } = frontmatter;
  const iconStyle = {
    width: '3rem',
    height: '3rem',
  };

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className="ml-auto text-center">
          <PhoneIcon style={iconStyle} className="text-muted mb-3" />
          {phones.length > 1 ? phones.map((phone) => <div key={phone}><Phone phone={phone} /></div>) :
            <Phone phone={phones[0]} />
          }
        </Col>
        <Col lg={4} className="mr-auto text-center">
          <EnvelopeIcon style={iconStyle} className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contacts.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contacts.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contacts;
