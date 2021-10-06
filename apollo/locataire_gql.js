import gql from "graphql-tag";

export const NEW_LOCATAIRE = gql`
  mutation createLoc($data: LocataireCreateInput!) {
    createLocataire(data: $data) {
      id
    }
  }
`;

export const QUERY_LOCATAIRES = gql`
  query {
    locataires {
      id
      name
      phone
      avatar
      room {
        id
        numero
      }
    }
  }
`;
export const QUERY_LOCATAIRE=gql`
  query ($id:ID!){
    locataire(id:$id) {
      id
      name
      phone
      avatar
      payments{
        id
        amount
        typePayment
        duree
        locataire{
          id
          name
        }
        refBond
        createdAt
      }
    }
  }

`;
