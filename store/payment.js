import { NEW_PAYMENT, NEW_SORTIE,DELETE_PAYMENT,GET_PAYMENTS } from "../apollo/payment_gql";

export const state = () => ({
  payments: []
});

export const mutations = {
  LOAD_PAYMENT(state,data){
    state.payments=data;
  },
  DELETE_PAY(state,id){
    state.payments= state.payments.filter(doc=>doc.id!==id);
  }
};

export const actions = {
  async loadPayment(context,){
    let client = this.app.apolloProvider.defaultClient;

    try {
    const res= await  client.query({ query: GET_PAYMENTS })
      .then(({ data }) => {
        return data && data.payments;
      });
      context.commit("LOAD_PAYMENT",res)
    } catch (error) {
      context.dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de payment!"
      },{root:true})
    }
  },
  async createPayment({dispatch},data) {
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
  },
  async deletePayment({dispatch,commit},data){
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= client.mutate({
        mutation:DELETE_PAYMENT,variables:{id:data}
      }).then(({ data }) => {
        console.log(data);
        return data && data.deletePayment;
      });
      console.log(res);
      commit("DELETE_PAY",data)
      dispatch("pushNotification",{
        type:"done",
        message:" Payment effacer!"
      },{root:true})
    } catch (error) {
      console.log(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur d'effacer le payment"
      },{root:true})
    }
  }
};
