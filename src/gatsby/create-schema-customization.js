/**
 * define nullable items
 */
module.exports = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
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
        fields: {
          type: 'MdFields',
        },
      },
    }),

    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        privacyHref: {
          type: 'String',
        },
        privacyText: {
          type: 'String',
        },
        termsHref: {
          type: 'String',
        },
        termsText: {
          type: 'String',
        },

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
        title: {
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
      name: 'Gallery',
      fields: {
        content: {
          type: 'String',
        },
        extraInfo: {
          type: '[String]',
        },
        header: {
          type: 'String',
        },
        subheader: {
          type: 'String',
        },
        imageFileNameDetail: {
          type: 'String',
        },
        imageFileName: {
          type: 'String',
        },
      },
    }),

    schema.buildObjectType({
      name: 'MdFields',
      fields: {
        fileName: {
          type: 'String',
        },
        directoryName: {
          type: 'String',
        },
        langKey: {
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
        iconName: {
          type: 'String',
        },
        imageFileName: {
          type: 'String',
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
        mobile: {
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
