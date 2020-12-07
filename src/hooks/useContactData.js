import { graphql, useStaticQuery } from 'gatsby';

const useContactData = () => {
  const q = graphql`
    query ContactDataQuery {
      contactData: markdownRemark( fields: { source: {eq: "data"} } ) {
        frontmatter {
          phones
          email
        }
      }
    }
  `;
  const { contactData: { frontmatter: { phones, email } } } = useStaticQuery(q);
  return { phones, email };
};

export default useContactData;
