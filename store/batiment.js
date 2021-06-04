import { BATIMENT_QUERY,CREATE_HOUSE,EDIT_HOUSE,DELETE_HOUSE} from "~/apollo/batiment_gql";

export const state = () => ({
    batiments:[]
});

export const mutations = {
    LOAD_BATIMENTS(state,data){
        state.batiments=data
        console.log(state.batiments);
    },
};

export const actions = {
    async loadBatiment(context){
        let client = this.app.apolloProvider.defaultClient;
      const {data}=await client.query({query:BATIMENT_QUERY});
      const {batiments}=data;
      console.log(batiments);
      context.commit("LOAD_BATIMENTS",batiments);
    },
  async createBatiment({dispatch }, data) {
    let client = this.app.apolloProvider.defaultClient;
    try {
      console.log(data);
      const res = await client
        .mutate({ mutation: CREATE_HOUSE, variables: {data} })
        .then(({ data }) => {
          //console.log(data);
          return data && data.createBatiment;
        });

        dispatch("loadBatiment");
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async editBatiment(_, data) {
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
        } })
        .then(({ data }) => {
          //console.log(data);
          return data && data.updateBatiment;
        });

        dispatch("loadBatiment");
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async deleteBatiment({dispatch},id){
    let client=this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({
        mutation: DELETE_HOUSE,
        variables: {
          id:id,
        },
      })
      dispatch("loadBatiment");
    } catch (e) {
      console.log(e);
    }
  }
 
};