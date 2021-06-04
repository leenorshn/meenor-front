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
  async createBatiment(_, data) {
    let client = this.app.apolloProvider.defaultClient;
    try {
      console.log(data);
      const res = await client
        .mutate({ mutation: CREATE_HOUSE, variables: {data} ,
          // update: (store, { data: { createBatiment } }) => {
          //   // Read the data from our cache for this query.
          //   const data = store.readQuery({ query: BATIMENT_QUERY })
          //   // Add our tag from the mutation to the end
          //   data.batiments.push(createBatiment)
          //   // Write our data back to the cache.
          //   store.writeQuery({ query: BATIMENT_QUERY, data })
          // },
        
        })
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
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async deleteBatiment({commit},id){
    console.log(commit);
    let client=this.app.apolloProvider.defaultClient;
    try {
      const res= await client.mutate({
        mutation: DELETE_HOUSE,
        variables: {
          id:id,
        },
        // update: (store,) => {
        //   // Read the data from our cache for this query.
        //   const data = store.readQuery({ query: BATIMENT_QUERY })
        //   // Add our tag from the mutation to the end
        //   let updatedBatiment= data.batiments.filter(doc=>doc.id!==id)
        //   data.batiments=updatedBatiment
        //   // Write our data back to the cache.
        //   store.writeQuery({ query: BATIMENT_QUERY, data })
        // },
      })
      commit("DELETE_BATIMENT",id);
    } catch (e) {
      console.log(e);
    }
  }
 
};