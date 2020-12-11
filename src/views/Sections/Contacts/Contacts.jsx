import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageSection from '../../../components/PageSection';

import PhoneIcon from '../../../assets/fa/solid/phone.svg';
import EnvelopeIcon from '../../../assets/fa/solid/envelope.svg';
import WhatsappIcon from '../../../assets/fa/brand/whatsapp.svg';
import TelegramIcon from '../../../assets/fa/brand/telegram.svg';

import formatPhoneNumber from '../../../utils/formatPhoneNumber';
import useOrganization from '../../../hooks/useOrganization';

const ContactItem = ({ icon, to, title, text }) => (
  <Col lg={3} md={6} className="d-flex flex-column align-items-center mb-4">
    {icon}
    <div>
      {title && <span className="mr-1 text-muted">{title}:</span>}
      <a href={to}>
        {text}
      </a>
    </div>
  </Col>  
);
ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,  
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
};
ContactItem.defaultProps = {
  title: null,
};
const iconClass = 'text-muted mb-2 fa-x3';

const Contacts = ({ className, frontmatter }) => {
  const { phone, email, voice: { whatsapp, telegram } }  = useOrganization();
  
  if (!frontmatter) {
    return null;
  }
  const { anchor, header, subheader } = frontmatter;

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
        <ContactItem to={`tel:+${phone[0]}`} icon={<PhoneIcon className={iconClass}  />} text={formatPhoneNumber(phone[0])}/>
        <ContactItem to={`https://wa.me/${whatsapp}`} icon={<WhatsappIcon className={iconClass} />} title="WhatsApp" text={formatPhoneNumber(whatsapp)}/>
        <ContactItem to={`https://telegram/me/${telegram}`} icon={<TelegramIcon className={iconClass}  />} title="Telegram" text={telegram} />
        <ContactItem to={`mailto:${email[0]}`} icon={<EnvelopeIcon className={iconClass} />} text={email[0]}/>
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
