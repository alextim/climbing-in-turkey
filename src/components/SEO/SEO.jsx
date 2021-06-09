import React from 'react';
import PropTypes from 'prop-types';
import { SeoBase } from '@alextim/at-seo';

import config from '../../../config/website';
import i18n from '../../i18n/i18n';

import useSocialLinks from '../../hooks/useSocialLinks';
import useOrgContacts from '../../hooks/useOrgContacts';
import useOrgAddress from '../../hooks/useOrgAddress';

const SEO = ({ lang, pathname }) => {
  const socialLinks = useSocialLinks();
  const orgAddress = useOrgAddress();
  const orgContacts = useOrgContacts();
  const siteMeta = i18n.locales[lang];

  return (
    <SeoBase
      config={config}
      siteMeta={siteMeta}
      i18n={i18n}
      orgContacts={orgContacts}
      orgAddress={orgAddress}
      socialLinks={socialLinks}
      locale={lang}
      pathname={pathname}
      noindex
    />
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  lang: i18n.defaultLang,
};

export default SEO;
