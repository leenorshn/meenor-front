import gql from "graphql-tag";

export const COMPANY_QUERY = gql`
  query {
    company {
      id
      name
      description
      contacts {
        email
        phone
      }
      address {
        city
        local
      }
    }
  }
`;

export const ADD_CITY = gql`
  mutation createCity($city: String!) {
    createCity(city: $city) {
      id
      city
    }
  }
`;

export const DELETE_CITY = gql`
  mutation deleteC($id: ID!) {
    deleteCity(id: $id)
  }
`;
export const CITY_QUERY = gql`
  query {
    cities {
      id
      city
    }
  }
`;

export const COMPANY_UPDATE = gql`
  mutation updateCompany($data: CompanyUpdateInput!) {
    updateCompany(data: $data) {
      id
    }
  }
`;
