import React from 'react';
import PropTypes from 'prop-types';
import { SeoBase } from '@alextim/at-seo';

import config from '../../../config/website';
import i18n from '../../i18n/i18n';

import useSocialLinks from '../../hooks/useSocialLinks';
import useOrgContacts from '../../hooks/useOrgContacts';
import useOrgAddress from '../../hooks/useOrgAddress';

const SEO = ({ lang, pathname, keywords }) => {
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
      keywords={keywords}
      locale={lang}
      pathname={pathname}
      canonical
      noindex={false}
    />
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

SEO.defaultProps = {
  lang: i18n.defaultLang,
  keywords: null,
};

export default SEO;
