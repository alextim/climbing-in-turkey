const allLocales = require('../../config/locales.json');

const getLanguages = () => allLocales;
const locales = getLanguages();
const localeCodes = Object.keys(locales);
const i18nEnabled = localeCodes.length > 1;

const findDefaultLang = () => {
  for (let i = 0; i < localeCodes.length; i+=1) {
    if (locales[localeCodes[i]].default) {
      return localeCodes[i];
    }
  }
  return undefined;
};

const defaultLang = findDefaultLang() || locales.localeCodes[0];
const defaultLocale = locales[defaultLang];

const isDefaultLang = (lang) => lang === defaultLang;

const localizePath = (path, lang) => {
  if (isDefaultLang(lang)) {
    return path;
  }
  if (path === '/') {
    return `/${lang}`;
  }
  return `/${lang}${path}`;
};

const isValidLang = (x) => x && typeof x === 'string' && locales[x];

const langFromPath = (path) => {
  if (!path || path === '/') {
    return defaultLang;
  }
  const [, lang] = path.split('/');
  if (!isValidLang(lang)) {
    return defaultLang;
  }
  return lang;
};

const removeTrailingSlash = (s) => s.replace(/\/$/, '');

const purePath = (path) => {
  if (path === '/') {
    return '/';
  }
  const s = removeTrailingSlash(path);
  const i = s.indexOf('/', 1);
  if (i === -1 && s.length === 3) {
    return '/';
  }
  if (i === 3) {
    return s.length === 3 ? '/' : s.substring(3);
  }
  return s;
};

module.exports = {
  i18nEnabled,
  defaultLang,
  defaultLocale,
  isDefaultLang,
  isValidLang,
  localizePath,
  purePath,
  locales,
  localeCodes,
  langFromPath,
};
