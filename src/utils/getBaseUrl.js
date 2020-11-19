function getBaseUrl(defaultLang, lang) {
  return defaultLang !== lang ? `/${lang}/` :  '/';
}

module.exports = getBaseUrl;
