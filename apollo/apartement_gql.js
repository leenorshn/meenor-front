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
  query {
    room(id: "6156f1cd8fa402000e869cfe") {
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
          typePayment
          toDate
          duree
          refBond
          fromDate
          locataire {
            id
            name
          }
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
