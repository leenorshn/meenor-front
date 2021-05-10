import { NEW_PAYMENT } from "../apollo/payment_gql";

export const state = () => ({
  payments: []
});

export const mutations = {};

export const actions = {
  async createPayment(_,data) {
    let client = this.app.apolloProvider.defaultClient;
    try {

        const res = await client
        .mutate({ mutation: NEW_PAYMENT, variables: {data} })
        .then(({ data }) => {
          console.log(data);
          return data && data.createPayment;
        });

      console.log(res);

    } catch (error) {
        console.log(error);
    }
  }
};
