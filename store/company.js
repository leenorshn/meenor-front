
import {COMPANY_QUERY} from "~/apollo/company_gql";

export const state = () => ({
  company:{},

});

export const mutations = {
  SET_COMPANY(state,data){
    state.company=data;
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
        message:"Erreur de chargement de locataire!"
      },{root:true})
      console.error(error);
    }
  }
};
