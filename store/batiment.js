import { BATIMENT_QUERY} from "~/apollo/batiment_gql";

export const state = () => ({
    batiments:[]
});

export const mutations = {
    LOAD_BATIMENTS(state,data){
        
        state.batiments=data
        console.log(state.batiments);
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
//   async createBatiment(_, data) {
//     let client = this.app.apolloProvider.defaultClient;
//     try {
//       console.log(data);
//       const res = await client
//         .mutate({ mutation: NEW_ROOM, variables: {data} })
//         .then(({ data }) => {
//           console.log(data);
//           return data && data.createApartement;
//         });

//       console.log(res);
//     } catch (error) {
//       console.error(error);
//     }
//   },
 
};