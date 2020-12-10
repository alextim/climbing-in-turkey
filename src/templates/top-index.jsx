import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Navbar from 'views/Navbar';
import Top from 'views/Top';
import Footer from 'views/Footer';
import * as Sections from 'views/Sections';
import SEO from 'components/SEO/SEO';
import LanguageSelector from 'components/LanguageSelector';
import AppContextProvider from '../context';
import '../style/main.scss';

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    organization: yaml(fields: { type: { eq: "contacts" } }) {
      phone
      email
      voice {
        whatsapp
        telegram
      }
    }
    socialLinks: allYaml(
      filter: { fields: { type: { eq: "social-links" } } }
    ) {
      nodes {
        code
        to
        title
      }
    }    
    top: markdownRemark( fields: { langKey: { eq: $langKey }, type: {eq: "page-part"}, partName: {eq: "Top"} } ) {
      frontmatter {
        header
        subheader
        jumpToAnchor
        jumpToAnchorText
        image {
          default {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          desktop {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
    navbar: markdownRemark( fields: { langKey: { eq: $langKey }, type: {eq: "page-part"}, partName: {eq: "NavBar"} } ) {
      frontmatter {
        brand
      }
    }
    footer: markdownRemark( fields: { langKey: { eq: $langKey }, type: {eq: "page-part"}, partName: {eq: "Footer"} } ) {
      frontmatter {
        copyright
      }
    }
    sections: allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey }, type: {eq: "section"} } }
      sort: { order: ASC, fields: [fields___fileName] }
    ) {
      nodes {
        frontmatter {
          anchor
          header
          subheader
          content
          image {
            default {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          gallery {
            content
            extraInfo
            header
            subheader
            imageFileNameDetail
            imageFileName
          }
          services {
            content
            header
            image {
              default {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
          testimonials {
            name
            cite
            content
            image {
              alt
              default {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          timeline {
            content
            header
            imageContent
            imageFileName
            subheader
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

const IndexPage = ({ path, data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    sections,
    top,
    navbar,
    footer,
    organization,
    socialLinks,
  } = data;
  const topNode = top || {};
  const navBarNode = navbar || {};
  const footerNode = footer || {};


  // sections part
  const sectionsNodes = sections?.nodes || [];

  // anchors for NavBar
  const anchors = sectionsNodes.map((e) => e.frontmatter.anchor).filter((e) => e);

  let langSelectorPart;
  if (langTextMap != null && Object.keys(langTextMap).length > 1) {
    langSelectorPart = (
      <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
    );
  }

  return (
    <AppContextProvider value={{ organization, socialLinks }}>
      <SEO lang={langKey} pathname={path} />
      <Navbar
        anchors={anchors}
        frontmatter={navBarNode.frontmatter}
        extraItems={langSelectorPart}
      />
      <Top frontmatter={topNode.frontmatter} />
      {
        // dynamically import sections
        sectionsNodes.map(({ frontmatter, html, fields: { partName } }, i) => {
          const sectionComponentName = partName;
          const SectionComponent = Sections[sectionComponentName];

          return SectionComponent ? (
            <SectionComponent
              key={sectionComponentName}
              className={i % 2 ? 'bg-light' : null}
              frontmatter={frontmatter}
              html={html}
            />
          ) : null;
        })
      }
      <Footer frontmatter={footerNode.frontmatter} />
    </AppContextProvider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object,
  path: PropTypes.string.isRequired,
};

IndexPage.defaultProps = {
  pathContext: {
    langKey: 'en',
    defaultLang: 'en',
    langTextMap: {},
  },
};

export default IndexPage;
