import gql from "graphql-tag";

export const BATIMENT_QUERY = gql`
  query {
    batiments {
      id
      name
      address {
        city
        local
      }
      niveaux {
        id
        name
        kiosques {
          id
          format
          numero
          price
          locataire {
            id
            name
            avatar
            payments {
              amount
              fromDate
              toDate
            }
          }
        }
      }
    }
  }
`;
