import gql from "graphql-tag";

export const REGISTER_REQUEST = gql`
  mutation createComp($data: CompanyCreateInput!) {
    createCompany(data: $data) {
      id
    }
  }
`;
