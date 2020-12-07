import { graphql, useStaticQuery } from 'gatsby';

const useSocialData = () => {
  const q = graphql`
    query SocialDataQuery {
      socialData: markdownRemark( fields: { source: {eq: "data"} } ) {
        frontmatter {
          social {
            facebook
            instagram
          }
        }
      }
    }
  `;
  const { socialData: { frontmatter: { social: { facebook, instagram } } } } = useStaticQuery(q);
  return { facebook, instagram };
};

export default useSocialData;
