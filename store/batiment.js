import { BATIMENT_QUERY,CREATE_HOUSE,EDIT_HOUSE,DELETE_HOUSE} from "~/apollo/batiment_gql";

export const state = () => ({
    batiments:[]
});

export const mutations = {
    LOAD_BATIMENTS(state,data){
        state.batiments=data
        console.log(state.batiments);
    },
    DELETE_BATIMENT(state,data){
      console.log(data);
     state.batiments= state.batiments.filter(doc=>doc.id!==data);
    },
    CREATE_BATIMENT(state,data){
      state.batiments.push(data)
    }
};

export const actions = {
    async loadBatiment(context){
        let client = this.app.apolloProvider.defaultClient;
      const {data}=await client.query({query:BATIMENT_QUERY});
      const {batiments}=data;
      console.log(batiments);
      context.commit("LOAD_BATIMENTS",batiments);
    },
  async createBatiment({dispatch}, data) {
    let client = this.app.apolloProvider.defaultClient;
    try {
      console.log(data);
      const res = await client
        .mutate({ mutation: CREATE_HOUSE, variables: {data} ,})
        .then(({ data }) => {
          //console.log(data);
          return data && data.createBatiment;
        });

        commit("CREATE_BATIMENT",res);
        dispatch("pushNotification",{
          type:"done",
          message:"Batiment creer!"
        },{root:true})
      return res;
    } catch (err) {
      console.log(err);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de creation de batiment!"
      },{root:true})
    }
  },

  async editBatiment({dispatch}, data) {
    let client = this.app.apolloProvider.defaultClient;
    try {
      console.log(data);
      const res = await client
        .mutate({ mutation: EDIT_HOUSE, variables(){
          console.log(data.id);
          return{
            data:data,
            id:data.id,
          }
        },
        
      
      })
        .then(({ data }) => {
          //console.log(data);
          return data && data.updateBatiment;
        });

        dispatch("loadBatiment");
        dispatch("pushNotification",{
          type:"done",
          message:"Modification reussi"
        },{root:true})
      return res;
    } catch (err) {
      console.log(err);
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur de modification"
      },{root:true})
    }
  },
  async deleteBatiment({commit,dispatch},id){
    console.log(commit);
    let client=this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({
        mutation: DELETE_HOUSE,
        variables: {
          id:id,
        },
      })
      commit("DELETE_BATIMENT",id);
      dispatch("pushNotification",{
        type:"done",
        message:"Batiment effacer !"
      },{root:true})
    } catch (e) {
      dispatch("pushNotification",{
        type:"error",
        message:"Erreur d'effacer!"
      },{root:true})
      console.log(e);
    }
  }
 
};