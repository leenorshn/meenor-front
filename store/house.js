import { NEW_APARTEMENT } from "~/apollo/apartement_gql";

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
          return data && data.loginUser;
        });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
};
