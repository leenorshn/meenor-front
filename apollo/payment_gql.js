import gql from "graphql-tag";

export const GET_PAYMENTS = gql`
  query {
    payments {
      id
      locataire {
        id
        name
        avatar
        phone
      }
      room {
        id
        format
        numero
        price
      }
      amount
      fromDate
      toDate
      createdAt
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