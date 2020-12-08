import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Link } from 'gatsby';
import NavDropdown from 'react-bootstrap/NavDropdown';

import IconText from 'components/IconText';
import getBaseUrl from 'utils/getBaseUrl';

import './LanguageSelector.scss';

import LanguageIcon from '../assets/fa/solid/globe.svg';


const LanguageSelector = ({ defaultLang, langKey, langTextMap }) => (
  <NavDropdown
    title={<IconText icon={<LanguageIcon className="fa mr-2" />} text={langTextMap[langKey]} />}
    id="language-dropdown"
    className="language-selector"
  >
    {Object.keys(langTextMap).map((key) => {
      return (
        <Link
          key={key}
          to={getBaseUrl(defaultLang, key)}
          className={clsx('dropdown-item', { active: key === langKey })}
        >
          {langTextMap[key]}
        </Link>
      );
    })}
  </NavDropdown>
);

LanguageSelector.propTypes = {
  defaultLang: PropTypes.string,
  langKey: PropTypes.string,
  langTextMap: PropTypes.object,
};

LanguageSelector.defaultProps = {
  defaultLang: 'en',
  langKey: 'en',
  langTextMap: {
    en: 'English',
  },
};

export default LanguageSelector;
