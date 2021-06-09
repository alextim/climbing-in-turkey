/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const addressFragment = graphql`
  fragment AddressFragment on Address {
    name
    legalName
    alternateName
    description
    postalAddress {
      streetAddress
      addressLocality
      addressRegion
      postalCode
      addressCountry
      addressCountryName
    }
    contactPoint {
      name
      description
      contactType
      contactTypeName
      areaServed
      telephone
      email
    }
  }
`;
