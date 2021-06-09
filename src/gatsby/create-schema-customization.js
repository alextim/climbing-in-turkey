module.exports = ({ actions: { createTypes } }) => {
  const typeDefs = [
    `
    type Address implements Node @dontInfer {
      name: String
      alternateName: String
      legalName: String
      description: String
      contactPoint: [ContactPoint]
      postalAddress: PostalAddress
      locale: String!
    }

    type Contact implements Node @dontInfer {
      organizationType: String
      phone: [String]
      voice: Voice
      geo: Geo
      fax: String
      email: [String]
      openingHours: [[String]]
      hasMap: String
      embedMap: String
      foundingDate: Date
      priceRange: String
      currenciesAccepted: String
      paymentAccepted: String
    }

    type ContactPoint {
      name: String
      description: String
      contactType: String
      contactTypeName: String
      telephone: [String]
      email: [String]
      areaServed: String
    }

    type PostalAddress {
      streetAddress: [String]
      addressLocality: String
      addressRegion: String
      postalCode: String
      addressCountry: String
      addressCountryName: String
    }

    type Geo {
      latitude: Float!
      longitude: Float!
    }

    type Voice {
      skype: String
      whatsapp: String
      telegram: String
      viber: String
    }

    type Yaml implements Node @dontInfer {
      code: String
      to: String
      title: String
      top: Image
      about: Image
      gallery: [Image]
      testimonials: [Image]
      services: [Image]
      fields: YamlFields
    }

    type MarkdownRemark implements Node @dontInfer {
      frontmatter: Frontmatter
      fields: MdFields
    }

    type Frontmatter {
      header: String
      subheader: String
      content: String
      anchor: String
      jumpToAnchor: String
      jumpToAnchorText: String
      items: [Item]
      alt: String
    }

    type Item {
      header: String
      subheader: String
      content: String
      image: String
      alt: String
    }

    type MdFields {
      partName: String
      fileName: String
      directoryName: String
      langKey: String
      type: String
    }

    type YamlFields {
      type: String
    }

    type Image {
      sm: File @fileByRelativePath
      xl: File @fileByRelativePath
    }
    `,
  ];

  createTypes(typeDefs);
};
