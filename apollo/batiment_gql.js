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

export const BATIMENT_ONE_QUERY = gql`
  query getBatiment($id: ID!) {
    batiment(id: $id) {
      id
      name
      address {
        city
        local
      }
      niveaux {
        id
        name
        apartements {
          id
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
