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
      cities
      rccm
      id_nat
      description
    }
  }
`;

export const ADD_CITY = gql`
  mutation addcity($data: CitiesInput!) {
    addCity(data: $data) 
  }
`;

export const DELETE_CITY = gql`
  mutation deleteC($city: String!) {
    deleteCity(city: $city) 
  }
`;
