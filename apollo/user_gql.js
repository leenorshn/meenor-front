import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  query getCurrentUser($id: ID!) {
    user(id: $id) {
      id
      name
      role
      phone
      company {
        id
        name
      }
      createdAt
    }
  }
`;
