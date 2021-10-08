import gql from "graphql-tag";

export const GET_PAYMENTS = gql`
  query getpayments {
    payments {
      id
      amount
      typePayment
      toDate
      duree
      refBond
      fromDate
      locataire {
        id
        name
      }
      createdAt
    }
  }
`;

export const DELETE_PAYMENT = gql`
  mutation deletePay($id: ID!) {
    deletePayment(id: $id)
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

export const GET_SORTIES = gql`
  query {
    sorties {
      id
      amount
      personRef
      bonRef
      libele
      createdAt
    }
  }
`;
