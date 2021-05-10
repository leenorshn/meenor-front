import gql from "graphql-tag";

export const NEW_LOCATAIRE = gql`
  mutation createLoc($data: LocataireCreateInput!) {
    createLocataire(data: $data) {
      id
    }
  }
`;