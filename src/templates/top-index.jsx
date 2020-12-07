import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Navbar from 'views/Navbar';
import Top from 'views/Top';
import Footer from 'views/Footer';
import * as Sections from 'views/Sections';
import SEO from 'components/SEO';
import LanguageSelector from 'components/LanguageSelector';

import '../style/main.scss';

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    site {
      siteMetadata {
        keywords
        description
      }
    }
    top: markdownRemark( fields: { langKey: { eq: $langKey }, source: {eq: "page"}, partName: {eq: "Top"} } ) {
      frontmatter {
        header
        subheader
        jumpToAnchor
        jumpToAnchorText
        image {
          mobile {
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
    navbar: markdownRemark( fields: { langKey: { eq: $langKey }, source: {eq: "page"}, partName: {eq: "NavBar"} } ) {
      frontmatter {
        brand
      }
    }
    footer: markdownRemark( fields: { langKey: { eq: $langKey }, source: {eq: "page"}, partName: {eq: "Footer"} } ) {
      frontmatter {
        copyright
        social {
          facebook
          instagram
        }
        privacyHref
        privacyText
        termsHref
        termsText
      }
    }
    sections: allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey }, source: {eq: "sections"} } }
      sort: { order: ASC, fields: [fields___fileName] }
    ) {
      nodes {
        frontmatter {
          anchor
          header
          subheader
          content
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
            iconName
            imageFileName
          }
          testimonials {
            name
            cite
            content
            image {
              alt
              mobile {
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
        fields {
          partName
        }
      }
    }
  }
`;

const IndexPage = ({ data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    site: {
      siteMetadata: { keywords, description },
    },
    sections,
    top,
    navbar,
    footer,
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
    <>
      <SEO lang={langKey} title="Top" keywords={keywords} description={description} />
      <Navbar
        anchors={anchors}
        frontmatter={navBarNode.frontmatter}
        extraItems={langSelectorPart}
      />
      <Top frontmatter={topNode.frontmatter} />
      {
        // dynamically import sections
        sectionsNodes.map(({ frontmatter, fields: { partName } }, ind) => {
          const sectionComponentName = partName;
          const SectionComponent = Sections[sectionComponentName];

          return SectionComponent ? (
            <SectionComponent
              key={sectionComponentName}
              className={ind % 2 === 1 ? 'bg-light' : null}
              frontmatter={frontmatter}
            />
          ) : null;
        })
      }
      <Footer frontmatter={footerNode.frontmatter} />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object,
};

IndexPage.defaultProps = {
  pathContext: {
    langKey: 'en',
    defaultLang: 'en',
    langTextMap: {},
  },
};

export default IndexPage;
