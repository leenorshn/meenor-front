
import {COMPANY_QUERY,ADD_CITY,DELETE_CITY} from "~/apollo/company_gql";

export const state = () => ({
  company:{},
  cities:{}

});

export const mutations = {
  SET_COMPANY(state,data){
    state.company=data;
  },
  SET_CITY(state,data){
    state.cities=data;
  },
  ADD_CITYS(state,data){
    state.cities.unshift(data);
  },
  DELETE_C(state,ct){
    state.cities=state.cities.filter((c)=>c!==ct)
  }

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
      commit("SET_CITY",res.cities)
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  },
  async addCity({dispatch,commit},data){
    
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({mutation:ADD_CITY,variables:{data:{cities:data}}})
      .then(({data})=>{
        return data && data.company;
      });
      dispatch("getCompany");
      dispatch("pushNotification",{
        type:"done",
        message:"Ville ajouter"
      },{root:true})
      commit("ADD_CITYS",res);
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  },
 async deleteCity({dispatch},city){
    //console.log(data);
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
      commit("DELETE_C",res)
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur d'effacage!"
      },{root:true})
      console.error(error);
    }
  }
};
