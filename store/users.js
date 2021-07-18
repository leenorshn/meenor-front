import { CREATE_USER,GET_USERS,DELETE_USER } from "../apollo/user_gql";

export const state = () => ({
  users: []
});

export const mutations = {
    LOAD_USERS(state,data){
        state.users=data
    }
};

export const actions = {
  async loadUsers(context,){
    let client = this.app.apolloProvider.defaultClient;

    try {
    const res= await  client.query({ query: GET_USERS })
      .then(({ data }) => {
        return data && data.users;
      });
      context.commit("LOAD_USERS",res)
    } catch (error) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de chargement de users!"
      },{root:true})
    }
  },
  async createUser({dispatch},user) {
    let client = this.app.apolloProvider.defaultClient;
    try {
        console.log(user);
        const res = await client
        .mutate({ mutation: CREATE_USER, variables: {data:user} })
        .then(({ data }) => {
          console.log(data);
          return data && data.createUser;
        });

      console.log(res);
      dispatch("pushNotification",{
        type:"done",
        message:"User creer!"
      },{root:true})

    } catch (error) {
        console.log(error);
        dispatch("pushNotification",{
          type:"error",
          message:"Erreur de user!"
        },{root:true})
    }
  },
 
  async deleteUser({dispatch},data){
    let client =this.app.apolloProvider.defaultClient;
    try {
      const res= client.mutate({
        mutation:DELETE_USER,variables:{id:data}
      }).then(({ data }) => {
        console.log(data);
        return data && data.deleteUser;
      });
      dispatch("pushNotification",{
        type:"done",
        message:" utilisateur effacer!"
      },{root:true})
    } catch (error) {
      console.log(error);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur d'effacer le payment"
      },{root:true})
    }
  }
};
