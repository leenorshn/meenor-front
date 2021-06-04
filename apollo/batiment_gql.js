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
      totaleNiveaux
      totalRooms
      niveaux {
        id
        name
        totalRooms
        rooms {
          id
          format
          category
          price
          niveau {
            id
          }
          numero
          isAvalaible
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
      totaleNiveaux
      totalRooms
      niveaux {
        id
        name
        totalRooms

        rooms {
          id
          format
          price
          niveau {
            id
          }
          category
          numero
          isAvalaible
        }
      }
    }
  }
`;
export const CREATE_HOUSE = gql`
  mutation createHouse($data: BatimentCreateInput!) {
    createBatiment(data: $data) {
      id
    }
  }
`;

export const EDIT_HOUSE = gql`
  mutation updateHouse($id: ID!, $data: BatimentUpdateInput!) {
    updateBatiment(id: $id, data: $data) {
      id
    }
  }
`;

export const GET_HOUSE = gql`
  query getHouse($id: ID!) {
    batiment(id: $id) {
      id
      name
      address {
        city
        local
      }
    }
  }
`;

export const DELETE_HOUSE = gql`
  mutation deleteHouse($id: ID!) {
    deleteBatiment(id: $id) 
  }
`;
