import { LOGIN_REQUEST } from "~/apollo/login_gql";
import { REGISTER_REQUEST } from "~/apollo/register_gql";

export const state = () => ({
    currentUser:null,
    notifications:[]
  })
  
  export const mutations = {
    SET_CURRENT_USER(state,data) {
      state.currentUser=data;
    },
    CREATE_NOTIF(state,data){
      state.notifications.push(data)
    },
    REMOVE_NOTIF(state,data){
      state.notifications=state.notifications.filter(doc=>doc.id!=data.id);
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
        context.dispatch("pushNotification",{
          type:"done",
          message:"Bienvenue encore"
        })
        await this.$apolloHelpers.onLogin(res.token)
        return res.user;
      } catch (error) {
        context.dispatch("pushNotification",{
          type:"error",
          message:"Erreur de connexion"
        })
        console.error(error)
      }
      },
      pushNotification({commit},data){
        commit("CREATE_NOTIF",data)
      },
      removeNotification({commit},data){
        commit("REMOVE_NOTIF",data);
      }
     
  }