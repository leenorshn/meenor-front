import gql from "graphql-tag";

export const NEW_LOCATAIRE=gql`
    mutation createLoca($data:LocataireCreateInput!){
  createLocataire(data:$data){
    id
  }
}

`;