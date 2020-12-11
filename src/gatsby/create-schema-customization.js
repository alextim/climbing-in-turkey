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
        email: {
          type: 'String',
        },
        phones: {
          type: '[String]',
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
        social: {
          type: 'Social',
        },
        timeline: {
          type: '[Timeline]',
        },
        services: {
          type: '[Service]',
        },
        testimonials: {
          type: '[Testimonial]',
        },
        gallery: {
          type: '[Gallery]',
        },
        image: {
          type: 'Image',
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
      name: 'Gallery',
      fields: {
        header: {
          type: 'String',
        },
        subheader: {
          type: 'String',
        },
        image: {
          type: 'Image',
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
      name: 'Testimonial',
      fields: {
        image: {
          type: 'Image',
        },
        name: {
          type: 'String',
        },
        cite: {
          type: 'String',
        },
        content: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Timeline',
      fields: {
        content: {
          type: 'String',
        },
        header: {
          type: 'String',
        },
        imageContent: {
          type: 'String',
        },
        imageFileName: {
          type: 'String',
        },
        subheader: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Service',
      fields: {
        image: {
          type: 'Image',
        },
        header: {
          type: 'String',
        },
        content: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Social',
      fields: {
        instagram: {
          type: 'String',
        },
        facebook: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Image',
      fields: {
        default: {
          type: 'File',
          extensions: {
            fileByRelativePath: {},
          },
        },
        desktop: {
          type: 'File',
          extensions: {
            fileByRelativePath: {},
          },
        },
        alt: {
          type: 'String',
        },
      },
    }),
  ];

  createTypes(typeDefs);
};
