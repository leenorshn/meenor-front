import { LOGIN_REQUEST } from "~/apollo/login_gql";

export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }
  
  export const actions={
      async login(_,data){
        let client = this.app.apolloProvider.defaultClient;
      try {
        const res=await  client.mutate({mutation:LOGIN_REQUEST,variables:data})
        .then(({data}) =>{
          console.log(data);
          return data && data.loginUser;
        })
        console.log(res);
        //context.commit("");
        await this.$apolloHelpers.onLogin(res.token)
      } catch (error) {
        console.error(error)
      }
      },
      register(context,data){

      }
  }