const path = require('path');


const getBaseUrl = require('../utils/getBaseUrl');
const { defaultLang, langTextMap = {} } = require('../../config/site');

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
            path: getBaseUrl(defaultLang, langKey),
            component: topIndex,
            context: {
              langKey,
              defaultLang,
              langTextMap,
            },
          });
        });

        return null;
      }),
    );
  });
};
