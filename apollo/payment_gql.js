import gql from "graphql-tag";

export const GET_PAYMENTS = gql`
  query getTransactions{
  transactions{
    id
    libele
    amount
    currency
    accountFrom{
      id
      owner{
        id
        name
        phone
      }
    }
    accountTo{
      id
      owner{
        id
        name
        phone
      }
    }
  }
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
