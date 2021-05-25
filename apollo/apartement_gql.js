import gql from "graphql-tag";

export const NEW_APARTEMENT = gql`
  mutation createApartement($data: ApartementCreateInput!) {
    createApartement(data: $data) {
      id
    }
  }
`;
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
  query getHouse($id: ID!) {
    room(id: $id) {
      id
      format
      niveau {
        name
      }
      numero
      hasPower
      hasWater
      isAvalaible
      category
    }
  }
`;
