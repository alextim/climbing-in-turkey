/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Top from '../views/Top';
import Footer from '../views/Footer';
import * as Sections from '../views/Sections';
import Navbar from '../views/Navbar';

import SEO from '../components/SEO';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import i18n from '../i18n/i18n';
import AppContextProvider from '../context';
import '../style/main.scss';

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    keywords: keyword(locale: { eq: $langKey }) {
      values
    }
    address: address(locale: { eq: $langKey }) {
      ...AddressFragment
    }
    images: yaml(fields: { type: { eq: "images" } }) {
      top {
        sm {
          childImageSharp {
            # width: 480
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
        }
        xl {
          childImageSharp {
            # width: 1920
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
        }
      }
      about {
        sm {
          childImageSharp {
            # width: 400
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
        }
      }
      gallery {
        sm {
          childImageSharp {
            # width: 400
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
        }
        xl {
          childImageSharp {
            # width: 1920
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
          publicURL
        }
      }
      services {
        sm {
          childImageSharp {
            # width: 400
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 0.75, formats: [AUTO, WEBP])
          }
        }
      }
      testimonials {
        sm {
          childImageSharp {
            # width: 400
            gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
          }
        }
      }
    }
    organization: contact {
      phone
      email
      voice {
        whatsapp
        telegram
      }
    }
    socialLinks: allSocialLink(filter: { locale: { eq: $langKey } }) {
      nodes {
        code
        to
        title
      }
    }
    top: markdownRemark(fields: { langKey: { eq: $langKey }, partName: { eq: "Top" } }) {
      frontmatter {
        header
        subheader
        jumpToAnchor
        jumpToAnchorText
        alt
      }
    }
    sections: allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey }, type: { eq: "section" } } }
      sort: { order: ASC, fields: [fields___fileName] }
    ) {
      nodes {
        frontmatter {
          anchor
          header
          subheader
          content
          alt
          items {
            header
            subheader
            content
            alt
          }
        }
        html
        fields {
          partName
        }
      }
    }
  }
`;

const IndexPage = ({
  path,
  data: { images, sections, top, organization, socialLinks, address, keywords },
  pageContext: { langKey, defaultLang, langTextMap },
}) => {
  const siteMeta = i18n.locales[langKey];

  // anchors for NavBar
  const anchors = sections.nodes
    .filter(({ frontmatter: { anchor } }) => anchor)
    .map(({ frontmatter: { anchor, header } }) => ({ anchor, header }));

  let langSelectorPart;
  if (langTextMap != null && Object.keys(langTextMap).length > 1) {
    langSelectorPart = (
      <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
    );
  }

  return (
    <AppContextProvider value={{ organization, socialLinks, address }}>
      <SEO lang={langKey} pathname={path} keywords={keywords?.values} />
      <Navbar
        anchors={anchors}
        siteShortName={siteMeta.siteShortName}
        extraItems={langSelectorPart}
      />
      <Top frontmatter={top.frontmatter} images={images.top} />
      {
        // dynamically import sections
        sections.nodes
          .filter(({ frontmatter }) => frontmatter)
          .map(({ frontmatter, html, fields: { partName } }) => {
            // eslint-disable-next-line import/namespace
            const SectionComponent = Sections[partName];

            return SectionComponent ? (
              <SectionComponent
                key={partName}
                images={images[partName.toLowerCase()]}
                frontmatter={frontmatter}
                html={html}
              />
            ) : null;
          })
      }
      <Footer />
    </AppContextProvider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    langKey: PropTypes.string,
    defaultLang: PropTypes.string,
    langTextMap: PropTypes.object,
  }),
  path: PropTypes.string.isRequired,
};

IndexPage.defaultProps = {
  pageContext: {
    langKey: 'ru',
    defaultLang: 'ru',
    langTextMap: {},
  },
};

export default IndexPage;
