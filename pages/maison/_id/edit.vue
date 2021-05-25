<template>
  <div>
    <div
      class="bg-blue-600 text-white py-2 px-4 w-full flex items-center justify-between"
    >
      <h2 class="font-bold">Modifier</h2>
      <nuxt-link class="bg-blue-900 rounded-md px-8 py-1" to="/maison"
        >Retour</nuxt-link
      >
    </div>
    <div class="bg-white h-96">
      <div class="w-2/3 mx-auto bg-gray-100 h-96 py-5 px-16 space-y-3 flex">
        <div>
          <div class="w-80">
            <label for="house_name" class="block text-sm text-gray-500"
              >Nom du batiment:</label
            >
            <input
              type="text"
              v-model="batiment.name"
              id="house_name"
              placeholder="Ex: Immeuble X"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="w-80">
            <label for="city" class="block text-sm text-gray-500">Ville:</label>
            <input
              type="text"
              v-model="batiment.address.city"
              id="city"
              placeholder="Ex: Goma"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="w-80">
            <label for="first_name" class="block text-sm text-gray-500"
              >Adresse locale:</label
            >
            <textarea
              type="text"
              v-model="batiment.address.local"
              id="first_name"
              placeholder="Ex: Com. Xx , Av. Yy n-Z"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div class="py-2 w-full space-y-4 px-16">
          <button
            @click="editBatiment()"
            class="px-8 w-64 block py-2 rounded bg-blue-600 text-white"
          >
            Modifier
          </button>
          <button
            @click.prevent="annuler()"
            class="px-8 w-64 block py-2 rounded bg-orange-600 text-white"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { mapActions } from "vuex";
import { EDIT_HOUSE,GET_HOUSE } from "~/apollo/batiment_gql.js";
export default {
  data() {
    return {
    };
  },
  async asyncData({app,params}){
    const res = await app.apolloProvider.defaultClient
          .query({
            query: GET_HOUSE,
            variables: {
              id: params.id,
            },
          })
          .then(({ data }) => {
            //console.log(data);
            return data && data.batiment;
          });

          return {
            batiment:res
          }
  },
  
  methods: {
    
    async editBatiment() {
      try {
       // console.log(this.$route.params.id)          
          const res = await this.$apollo
          .mutate({
            mutation: EDIT_HOUSE,
            variables: {
              id: this.batiment.id,
              data:{
                name:this.batiment.name,
                address:{
                  city:this.batiment.address.city,
                  local:this.batiment.address.local
                },
              }
            },
          })
          .then(({ data }) => {
            console.log(data);
            return data && data.updateBatiment;
          });

        
        return res;
        
        
       
      } catch (err) {
        console.log(err);
      }
    },
    annuler() {
      this.editHouse = {};
      this.address = {};
    },
  },
};
</script>