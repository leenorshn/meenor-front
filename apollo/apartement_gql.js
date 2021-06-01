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

export const GET_ROOM = gql`
  query getRoom($id: ID!) {
    room(id: $id) {
      id
      format
      price
      locataire{
        id
        name
        phone
      }
      numero
      hasPower
      hasWater
      isAvalaible
      category
    }
  }
`;
