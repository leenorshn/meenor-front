import { NEW_ROOM,NEW_NIVEAU} from "~/apollo/apartement_gql";

export const state = () => ({});

export const mutations = {};

export const actions = {
  async createRoom(_, data) {
    let client = this.app.apolloProvider.defaultClient;
    try {
      console.log(data);
      const res = await client
        .mutate({ mutation: NEW_ROOM, variables: {data} })
        .then(({ data }) => {
          console.log(data);
          return data && data.createApartement;
        });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  },
 
  async createNiveau(_,data){
    let client = this.app.apolloProvider.defaultClient; 
    try {
        console.log(data);
        const res = await client
          .mutate({ mutation: NEW_NIVEAU, variables: {data} })
          .then(({ data }) => {
            console.log(data);
            return data && data.createNiveau;
          });
  
        console.log(res);
      } catch (error) {
        console.error(error);
      }
  }
};
