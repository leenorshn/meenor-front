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
      dispatch("pushNotification",{
        type:"done",
        message:"Payment creer!"
      },{root:true})

    } catch (error) {
        console.log(error);
        dispatch("pushNotification",{
          type:"error",
          message:"Erreur de payment!"
        },{root:true})
    }
  },
  async createSortie({dispatch},data){
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= client.mutate({
        mutation:NEW_SORTIE,variables:{data}
      }).then(({ data }) => {
        console.log(data);
        return data && data.createSortie;
      });
      console.log(res);
      dispatch("pushNotification",{
        type:"done",
        message:" Sortie creer!"
      },{root:true})
    } catch (error) {
      console.log(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de creation de sortie"
      },{root:true})
    }
  }
};
