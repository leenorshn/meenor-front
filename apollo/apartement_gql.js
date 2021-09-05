import gql from "graphql-tag";

export const NEW_ROOM = gql`
  mutation createRoo($data: RoomCreateInput!) {
    createRoom(data: $data) {
      id
    }
  }
`;

export const NEW_NIVEAU = gql`
  mutation createNiv($data: NiveauCreateInput!) {
    createNiveau(data: $data) {
      id
    }
  }
`;

export const DELETE_NIVEAU = gql`
  mutation deleteNi($id: ID!) {
    deleteNiveau(id: $id)
  }
`;

export const GET_ROOM = gql`
  query getRoom($id: ID!) {
    room(id: $id) {
      id
      format
      price
      locataires {
        id
        name
        phone
        avatar
        payments {
          id
          amount
          fromDate
          toDate
          createdAt
        }
      }
      numero
      hasPower
      hasWater
      isAvalaible
      category
    }
  }
`;
