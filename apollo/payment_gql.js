import gql from "graphql-tag";

export const GET_PAYMENTS = gql`
  query getpayments{
    payments {
      id
      # locataire {
      #   id
      #   name
      #   avatar
      #   phone
      # }
      amount
      typePayment
      fromDate
      toDate
      createdAt
    }
  }
`;

export const DELETE_PAYMENT=gql`
  mutation deletePay($id:ID!){
  deletePayment(id:$id)
}
`;

export const NEW_PAYMENT = gql`
  mutation($data: PaymentCreateInput!) {
    createPayment(data: $data) {
      id
    }
  }
`;
export const ACCOUNT_QUERY = gql`
  query {
    accounts {
      id
      name
      balance
    }
  }
`;

export const NEW_SORTIE = gql`
  mutation createSortie($data: SortieCreateInput!) {
    createSortie(data: $data) {
      id
    }
  }
`;
