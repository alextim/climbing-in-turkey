import React from 'react';
import PropTypes from 'prop-types';

import SeoBase from './SeoBase';

import config from '../../../config/website';
import i18n from '../../i18n/i18n';

import useSocialLinks from '../../hooks/useSocialLinks';
import useOrganization from '../../hooks/useOrganization';

const SEO = ({ lang, pathname }) => {
  const siteMeta = i18n.locales[lang];
  const socialLinks = useSocialLinks();
  const organization = useOrganization();

  return (
    <SeoBase
      locale={lang}
      siteMeta={siteMeta}
      pathname={pathname}
      noindex
      config={config}
      socialLinks={socialLinks}
      organization={organization}
      i18n={i18n}
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
