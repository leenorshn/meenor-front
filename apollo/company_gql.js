import gql from "graphql-tag";

export const COMPANY_QUERY = gql`
  query {
    company {
      id
      name
      address {
        city
        local
      }
      users {
        id
        name
        avatar
        role
        phone
      }
      contacts {
        email
        phone
      }
      cities{
        id
        city
      }
      rccm
      id_nat
      description
    }
  }
`;

export const ADD_CITY = gql`
  mutation createCity($city:String!){
createCity(city:$city){
  id
  city
}   
  
}
`;

export const DELETE_CITY = gql`
  mutation deleteC($id: ID!) {
    deleteCity(city: $id) 
  }
`;
