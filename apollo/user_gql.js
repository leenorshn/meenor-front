import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  query getCurrentUser($id: ID!) {
    user(id: $id) {
      id
      name
      role
      phone
      createdAt
    }
  }
`;


export const GET_USERS = gql`
  query getCurrentUser($id: ID!) {
    user(id: $id) {
      id
      name
      role
      phone
      createdAt
    }
  }
`;

export const CREATE_USER = gql`
  mutation newUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
    }
  }
`;

export const DELETE_USER=gql`
  mutation deleteUser($id:ID!){
  deleteUser(id:$id)
}
`;
