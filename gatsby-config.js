const path = require('path');
const i18n = require('./src/i18n/i18n');
const config = require('./config/website');

const manifestIconSrc = `${__dirname}/src/assets/images/icon.png`;

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'page-part',
        path: `${__dirname}/content/page-parts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'section',
        path: `${__dirname}/content/sections`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/assets/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Yaml', // a fixed string
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          /**
           * gatsby-remark-relative-images must go before gatsby-remark-images
           *
           *  */
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        /*
        trackingId: config.googleAnalyticsID,
        anonymize: true,
        allowLinker: true,
        head: false,
        respectDNT: false,
        */
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: i18n.defaultLocale.siteTitle,
        short_name: i18n.defaultLocale.siteShortName,
        lang: i18n.defaultLang,
        description: i18n.defaultLocale.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: manifestIconSrc,
        localize: i18n.localeCodes
          .filter((code) => code !== i18n.defaultLang)
          .map((code) => {
            const { htmlLang, siteTitle, siteShortName, siteDescription } = i18n.locales[code];
            return {
              start_url: `${i18n.localizePath('/', code)}/`,
              lang: htmlLang,
              name: siteTitle,
              short_name: siteShortName,
              description: siteDescription,
            };
          }),
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "core.scss";',
        includePaths: [path.resolve(__dirname, 'src/style')],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: i18n.defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ['/content/'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
          options: {
            props: {
              className: 'fa',
            },
          },
        },
      },
    },
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
};
