/* eslint-disable no-template-curly-in-string */
module.exports = {
  presets: [
    // 'babel-preset-gatsby',
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          hooks: './src/hooks',
          views: './src/views',
          context: './src/context',
          utils: './src/utils',

          config: './config',
        },
      },
    ],
    [
      'import',
      {
        libraryName: 'react-bootstrap',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'tree-shaking-react-bootstrap',
    ],
    [
      'transform-imports', {
        /*
        'react-bootstrap': {
          transform: 'react-bootstrap/lib/${member}',
          preventFullImport: true,
        },
        '@fortawesome/free-solid-svg-icons': {
          transform: '@fortawesome/free-solid-svg-icons/${member}',
          skipDefaultConversion: true,
        },
        '@fortawesome/free-brands-svg-icons': {
          transform: '@fortawesome/free-brands-svg-icons/${member}',
          skipDefaultConversion: true,
        },
        ramda: {
          transform: 'ramda/src/${member}',
          preventFullImport: true,
        },
        */
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-react-remove-prop-types'],
    },
  },
};
