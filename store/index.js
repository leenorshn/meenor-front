import { LOGIN_REQUEST } from "~/apollo/login_gql";
import { REGISTER_REQUEST } from "~/apollo/register_gql";

export const state = () => ({
    currentUser:null
  })
  
  export const mutations = {
    SET_CURRENT_USER(state,data) {
      state.currentUser=data;
    }
  }
  
  export const actions={
      async login(context,data){
        let client = this.app.apolloProvider.defaultClient;
      try {
        //console.log(data);
        const res=await  client.mutate({mutation:LOGIN_REQUEST,variables:data})

        .then(({data}) =>{
          //console.log(data);
          return data && data.loginUser;
        })
        
        //console.log(res);
        context.commit("SET_CURRENT_USER",res.user);
        await this.$apolloHelpers.onLogin(res.token)
        return res.user;
      } catch (error) {
        console.error(error)
      }
      },
     async register(_,data){
        let client = this.app.apolloProvider.defaultClient;
      const res=await  client.mutate({mutation:REGISTER_REQUEST,variables:data})
      .then(({data})=>{
        return data;
      });
        return res;

      }
  }