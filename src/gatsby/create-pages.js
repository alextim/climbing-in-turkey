const path = require('path');
const i18n = require('../i18n/i18n');

const getBaseUrl = require('../utils/getBaseUrl');

const langTextMap = i18n.localeCodes.reduce((prev, el) => {
  prev[el] = i18n.locales[el].localName;
  return prev;
}, {});
/**
 * generate i18n top pages
 */
module.exports = ({ graphql, actions: { createPage } }) => {
  const topIndex = path.resolve('./src/templates/top-index.jsx');

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              distinct(field: fields___langKey)
            }
          }
        `,
      ).then(({ errors, data }) => {
        if (errors) {
          // eslint-disable-next-line no-console
          console.error(errors);
          reject(errors);
        }

        data.allMarkdownRemark.distinct.forEach((langKey) => {
          createPage({
            path: getBaseUrl(i18n.defaultLang, langKey),
            component: topIndex,
            context: {
              langKey,
              defaultLang: i18n.defaultLang,
              langTextMap,
            },
          });
        });

        return null;
      }),
    );
  });
};
