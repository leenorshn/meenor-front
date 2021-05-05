import { NEW_APARTEMENT,NEW_KIOSQUE } from "~/apollo/apartement_gql";

export const state = () => ({});

export const mutations = {};

export const actions = {
  async createApartement(_, data) {
    let client = this.app.apolloProvider.defaultClient;
    try {
      console.log(data);
      const res = await client
        .mutate({ mutation: NEW_APARTEMENT, variables: {data} })
        .then(({ data }) => {
          console.log(data);
          return data && data.createApartement;
        });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  },
  async createKiosque(_,data){
    let client = this.app.apolloProvider.defaultClient; 
    try {
        console.log(data);
        const res = await client
          .mutate({ mutation: NEW_KIOSQUE, variables: {data} })
          .then(({ data }) => {
            console.log(data);
            return data && data.createKiosque;
          });
  
        console.log(res);
      } catch (error) {
        console.error(error);
      }
  }
};
