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
    images: yaml(fields: { type: { eq: "images" } }) {
      top {
        default {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        desktop {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      about {
        default {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }        
      }
      gallery {
        default {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        desktop {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }                
          publicURL
        }
      }
      services {
        default {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      testimonials {
        default {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }    
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
    top: markdownRemark( fields: { langKey: { eq: $langKey }, partName: {eq: "Top"} } ) {
      frontmatter {
        header
        subheader
        jumpToAnchor
        jumpToAnchorText
        alt
      }
    }
    navbar: markdownRemark( fields: { langKey: { eq: $langKey }, partName: {eq: "NavBar"} } ) {
      frontmatter {
        brand
      }
    }
    footer: markdownRemark( fields: { langKey: { eq: $langKey }, partName: {eq: "Footer"} } ) {
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

const IndexPage = ({ path, data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    images,
    sections,
    top,
    navbar,
    footer,
    organization,
    socialLinks,
  } = data;


  // anchors for NavBar
  const anchors = sections.nodes.map((e) => e.frontmatter.anchor).filter((e) => e);

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
        frontmatter={navbar.frontmatter}
        extraItems={langSelectorPart}
      />
      <Top frontmatter={top.frontmatter} image={images.top} />
      {
        // dynamically import sections
        sections.nodes.map(({ frontmatter, html, fields: { partName } }) => {
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
      <Footer frontmatter={footer.frontmatter} />
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
    langKey: 'ru',
    defaultLang: 'ru',
    langTextMap: {},
  },
};

export default IndexPage;
