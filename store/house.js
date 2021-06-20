import { NEW_ROOM,NEW_NIVEAU} from "~/apollo/apartement_gql";
import { NEW_LOCATAIRE,QUERY_LOCATAIRES} from "~/apollo/locataire_gql";

export const state = () => ({
  locataires:[],

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
     // console.log(data);
      const res = await client
        .mutate({ mutation: NEW_ROOM, variables: {data} })
        .then(({ data }) => {
          //console.log(data);
          return data && data.createApartement;
        });

      console.log(res);
      dispatch("pushNotification",{
        type:"done",
        message:"Chambre creer!"
      })
    } catch (error) {
      console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chambre!"
      })
    }
  },
  async editerRoom(){
    let client = this.app.apolloProvider.defaultClient;
    try {
     // console.log(data);
      const res = await client
        .mutate({ mutation: NEW_ROOM, variables: {data} })
        .then(({ data }) => {
          //console.log(data);
          return data && data.createApartement;
        });

      console.log(res);
      dispatch("pushNotification",{
        type:"done",
        message:"Chambre creer!"
      })
    } catch (error) {
      console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chambre!"
      })
    }
  },
  async deleteRoom(){
    let client = this.app.apolloProvider.defaultClient;
    try {
     // console.log(data);
      const res = await client
        .mutate({ mutation: NEW_ROOM, variables: {data} })
        .then(({ data }) => {
          //console.log(data);
          return data && data.createApartement;
        });

      console.log(res);
      dispatch("pushNotification",{
        type:"done",
        message:"Chambre creer!"
      })
    } catch (error) {
      console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chambre!"
      })
    }
  },
 
  async createNiveau(_,data){
    let client = this.app.apolloProvider.defaultClient; 
    try {
        //console.log(data);
        const res = await client
          .mutate({ mutation: NEW_NIVEAU, variables: {data} })
          .then(({ data }) => {
            //console.log(data);
            return data && data.createNiveau;
          });
  
        //console.log(res);
        dispatch("pushNotification",{
          type:"done",
          message:"Niveau creer!"
        })
      } catch (error) {
        dispatch("pushNotification",{
          type:"error",
          message:"Erreur de niveau!"
        })
        console.error(error);
      }
  },

  async createLocataire({dispatch},data){
    let client =this.app.apolloProvider.defaultClient;
    try {
      //console.log(data);
      const res= await client.mutate({mutation:NEW_LOCATAIRE,variables:{data}})
      .then(({data})=>{
       // console.log(data);
        return data && data.createLocataire;
      });
      dispatch("pushNotification",{
        type:"done",
        message:"Locataire creer!"
      })
    } catch (error) {
      //console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de creation de locataire!"
      })
    }
  },
  async getLocataire({commit,dispatch}){
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.query({query:QUERY_LOCATAIRES})
      .then(({data})=>{
        //console.log(data);
        return data && data.locataires;
      });
      commit("SET_LOCATAIRES",res);
      //console.log(res);
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      })
      console.error(error);
    }
  }
};
