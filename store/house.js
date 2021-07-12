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
  async createRoom({dispatch}, data) {
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
      },{root:true})
    } catch (error) {
      console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chambre!"
      },{root:true})
    }
  },
  async editerRoom({dispatch}){
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
      },{root:true})
    } catch (error) {
      console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chambre!"
      },{root:true})
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
      },{root:true})
    } catch (error) {
      console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chambre!"
      },{root:true})
    }
  },
 
  async createNiveau({dispatch},data){
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
        },{root:true})
      } catch (error) {
        dispatch("pushNotification",{
          type:"error",
          message:"Erreur de niveau!"
        },{root:true})
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
      },{root:true})
    } catch (error) {
      //console.error(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de creation de locataire!"
      },{root:true})
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
      console.log(res);
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  }
};
