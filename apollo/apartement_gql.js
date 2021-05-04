import gql from "graphql-tag";

export const NEW_APARTEMENT = gql`
  mutation createApartement($data: ApartementCreateInput!) {
    createApartement(data: $data) {
      id
    }
  }
`;
