<template>
  <div>
    <div class="flex w-full min-h-screen space-x-4">
      <div class="w-1/3 h-screen bg-green-300">
        <h3>Vote</h3>
      </div>
      

    </div>
    
    <div class="h-24"></div>
  </div>
</template>

<script >
import { BATIMENT_ONE_QUERY } from "~/apollo/batiment_gql";
import {mapActions} from "vuex"
export default {
  data(){
    return{
      isNiveauEdit:false,
      niveau:''
    }
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: BATIMENT_ONE_QUERY,
      variables: { id: params.id },
    });
    const { batiment } = data;
    return { batiment };
  },
  computed:{
    // tt(){
    //   let tableau=[]
    //   for(var i=0;i<this.batiment.niveaux.length;i++){
      
         
    //     tableau.push(...this.batiment.niveaux[i].rooms)
         
    //   }
    //   console.log(tableau);
    //    return tableau;
    // }
  },
  methods:{
    ...mapActions({createNiveau:"house/createNiveau"}),
    showCreateNiveau(){

      this.isNiveauEdit=true;
      console.log("Mala");
    },
    saveNiveau(){
      this.createNiveau({
        batiment:this.$route.params.id,
        name:this.niveau
      })
      this.isNiveauEdit=false;
    }
  }
};
</script>