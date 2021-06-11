const path = require('path');
const getCSP = require('@alextim/csp');

const i18n = require('./src/i18n/i18n');
const config = require('./config/website');

const manifestIconSrc = `${__dirname}/src/assets/images/icon.png`;

const toBoolean = (x) => {
  if (!x) {
    return false;
  }
  if (typeof x === 'boolean') {
    return x;
  }
  if (typeof x === 'number') {
    return !!x;
  }
  return typeof x === 'string' && x.trim().toLowerCase() === 'true';
};

const noIndex = toBoolean(process.env.NO_INDEX);

// eslint-disable-next-line no-console
console.log(`Robots and indexing: ${noIndex ? 'DISABLED' : 'ENABLED'}`);

const headerForAll = [
  `Content-Security-Policy: ${getCSP(!!config.googleAnalyticsID, false, false)}`,
  'Permissions-Policy: interest-cohort=()',
];
if (noIndex) {
  headerForAll.push('X-Robots-Tag: noindex, nofollow');
}

const headers = {
  '/*': headerForAll,
  '/assets/*': ['Cache-Control: public, max-age=31536000, immutable'],
  '/404.html': ['Cache-Control: max-age=300'],
  '/tr/404.html': ['Cache-Control: max-age=300'],
  '/en/404.html': ['Cache - Control: max- age=300'],
};

const plugins = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: path.join(__dirname, 'content', 'data'),
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'page-part',
      path: path.join(__dirname, 'content', 'page-parts'),
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'section',
      path: path.join(__dirname, 'content', 'sections'),
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.join(__dirname, 'content', 'assets', 'images'),
    },
  },
  {
    resolve: 'gatsby-transformer-yaml',
    options: {
      typeName: 'Yaml', // a fixed string
    },
  },
  'gatsby-plugin-image',
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
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      stages: ['develop'],
      extensions: ['js', 'jsx'],
      exclude: ['node_modules', '.cache', 'public', '.netlify', '.vscode', '.husky'],
      // Any eslint-webpack-plugin options below
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      // eslint-disable-next-line global-require
      implementation: require('node-sass'),
      additionalData: '@import "my-core.scss";',
      sassOptions: {
        precision: 6,
        includePaths: [path.resolve(__dirname, 'src/style')],
      },
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
  // 'gatsby-plugin-webpack-bundle-analyser-v2',
  {
    resolve: 'gatsby-plugin-netlify',
    options: {
      mergeSecurityHeaders: true,
      mergeCachingHeaders: true,
      headers,
    },
  },
];

if (config.googleAnalyticsID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: config.googleAnalyticsID,
      anonymize: true,
      allowLinker: true,
      head: false,
      respectDNT: false,
    },
  });
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  plugins,
};
