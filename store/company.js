
import gql from "graphql-tag";
import {COMPANY_QUERY,ADD_CITY,DELETE_CITY,CITY_QUERY,COMPANY_UPDATE} from "~/apollo/company_gql";

export const state = () => ({
  company:{},
  cities:[]

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
  DELETE_CT(state,id){
    state.cities=state.cities.filter(c=>c.id!=id);
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
     
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de company!"
      },{root:true})
      console.error(error);
    }
  },
  async updateCompany({commit,dispatch},company){
    let client =this.app.apolloProvider.defaultClient;
    console.log(company);
    try {
      const res= await client.mutate({mutation:COMPANY_UPDATE,variables: {data:company} })
      .then(({data})=>{
        //console.log(data);
        return data && data.updateCompany;
      });
      dispatch("pushNotification",{
        type:"done",
        message:"Company data updated!"
      },{root:true})
     
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de company!"
      },{root:true})
      console.error(error);
    }
  },
  async getCity({commit,dispatch}){
    
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.query({query:CITY_QUERY})
      .then(({data})=>{
        return data && data.cities;
      });
     // dispatch("getCompany");
     commit("SET_CITY",res)
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  },
  async addCity({dispatch,commit},data){
    //console.log(data);
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({mutation:ADD_CITY,variables:{city:data}})
      .then(({data})=>{
        return data && data.createCity;
      });
      console.log(res);
      commit("ADD_CITYS",res);
     
      dispatch("pushNotification",{
        type:"done",
        message:"Ville ajouter"
      },{root:true})
      //dispatch("getCity");
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  },
 async deleteCity({dispatch,commit},city){
    console.log(city);
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({mutation:DELETE_CITY,variables:{id:city}})
      .then(({data})=>{
        return data && data.deleteCity;
      });
      
      commit("DELETE_CT",city);
      dispatch("pushNotification",{
        type:"done",
        message:"Ville Effacer"
      },{root:true})
     
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur d'effacage!"
      },{root:true})
      console.error(error);
    }
  }
};
