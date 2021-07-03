
import {COMPANY_QUERY,ADD_CITY} from "~/apollo/company_gql";

export const state = () => ({
  company:{},

});

export const mutations = {
  SET_COMPANY(state,data){
    state.company=data;
  },

};

export const actions = {
  
  async getCompany({commit,dispatch}){
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.query({query:COMPANY_QUERY})
      .then(({data})=>{
        //console.log(data);
        return data && data.company;
      });
      commit("SET_COMPANY",res);
      console.log(res);
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  },
  async addCity({dispatch},data){
    console.log(data);
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({mutation:ADD_CITY,variables:{data:{cities:data}}})
      .then(({data})=>{
        //console.log(data);
        return data && data.company;
      });
      dispatch("getCompany");
      dispatch("pushNotification",{
        type:"done",
        message:"Ville ajouter"
      },{root:true})
      console.log(res);
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  },
  deleteCity({dispatch},city){
    console.log(data);
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({mutation:DELETE_CITY,variables:{city:city}})
      .then(({data})=>{
        //console.log(data);
        return data && data.company;
      });
      dispatch("getCompany");
      dispatch("pushNotification",{
        type:"done",
        message:"Ville Effacer"
      },{root:true})
      console.log(res);
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur d'effacage!"
      },{root:true})
      console.error(error);
    }
  }
};
