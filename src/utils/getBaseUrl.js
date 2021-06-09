const getBaseUrl = (defaultLang, lang) => (defaultLang !== lang ? `/${lang}/` : '/');

module.exports = getBaseUrl;
