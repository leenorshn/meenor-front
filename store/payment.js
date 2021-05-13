import { NEW_PAYMENT, NEW_SORTIE } from "../apollo/payment_gql";

export const state = () => ({
  payments: []
});

export const mutations = {};

export const actions = {
  async createPayment(_,data) {
    let client = this.app.apolloProvider.defaultClient;
    try {
        console.log(data);
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
  },
  async createSortie(_,data){
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= client.mutate({
        mutation:NEW_SORTIE,variables:{data}
      }).then(({ data }) => {
        console.log(data);
        return data && data.createSortie;
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
};
