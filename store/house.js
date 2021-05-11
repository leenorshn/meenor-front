import { NEW_ROOM,NEW_NIVEAU} from "~/apollo/apartement_gql";
import { NEW_LOCATAIRE} from "~/apollo/locataire_gql";

export const state = () => ({
  locataires:[]
});

export const mutations = {
  SET_LOCATAIRES(state,data){
    state.locataires=data;
  }
};

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
  },

  async createLocataire(_,data){
    let client =this.app.apolloProvider.defaultClient;
    try {
      console.log(data);
      const res= await client.mutate({mutation:NEW_LOCATAIRE,variables:{data}})
      .then(({data})=>{
        console.log(data);
        return data && data.createLocataire;
      });
    } catch (error) {
      console.error(error);
    }
  },
  async getLocataire(context){
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.query({query:NEW_LOCATAIRE})
      .then(({data})=>{
        console.log(data);
        return data && data.locataires;
      });
      context.commit("SET_LOCATAIRES",res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
};
