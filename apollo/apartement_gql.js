import gql from "graphql-tag";

export const NEW_APARTEMENT = gql`
  mutation createApartement($data: ApartementCreateInput!) {
    createApartement(data: $data) {
      id
    }
  }
`;
export const NEW_KIOSQUE = gql`
  mutation createKio($data: KiosqueCreateInput!) {
    createKiosque(data: $data) {
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
