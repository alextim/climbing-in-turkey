/**
 * define nullable items
 */
module.exports = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    schema.buildObjectType({
      name: 'Yaml',
      interfaces: ['Node'],
      extensions: {
        infer: false,
      },
      fields: {
        code: {
          type: 'String',
        },
        to: {
          type: 'String',
        },
        title: {
          type: 'String',
        },
        phone: {
          type: '[String]',
        },
        email: {
          type: '[String]',
        },
        voice: {
          type: 'Voice',
        },
        top: {
          type: 'Image',
        },
        about: {
          type: 'Image',
        },
        gallery: {
          type: '[Image]',
        },
        testimonials: {
          type: '[Image]',
        },
        services: {
          type: '[Image]',
        },
        fields: {
          type: 'MdFields',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Voice',
      fields: {
        whatsapp: {
          type: 'String',
        },
        telegram: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'MarkdownRemark',
      interfaces: ['Node'],
      extensions: {
        infer: false,
      },
      fields: {
        frontmatter: {
          type: 'Frontmatter',
        },
        html: {
          type: 'String',
        },
        fields: {
          type: 'MdFields',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        brand: {
          type: 'String',
        },
        copyright: {
          type: 'String',
        },
        anchor: {
          type: 'String',
        },
        jumpToAnchor: {
          type: 'String',
        },
        jumpToAnchorText: {
          type: 'String',
        },
        items: {
          type: '[Item]',
        },
        alt: {
          type: 'String',
        },
        header: {
          type: 'String',
        },
        subheader: {
          type: 'String',
        },
        content: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Item',
      fields: {
        header: {
          type: 'String',
        },
        subheader: {
          type: 'String',
        },
        content: {
          type: 'String',
        },
        image: {
          type: 'Image',
        },
        alt: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'MdFields',
      fields: {
        partName: {
          type: 'String',
        },
        fileName: {
          type: 'String',
        },
        directoryName: {
          type: 'String',
        },
        langKey: {
          type: 'String',
        },
        type: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Image',
      fields: {
        xs: {
          type: 'File',
          extensions: {
            fileByRelativePath: {},
          },
        },
        xl: {
          type: 'File',
          extensions: {
            fileByRelativePath: {},
          },
        },
      },
    }),
  ];

  createTypes(typeDefs);
};
