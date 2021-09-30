<template>
  <div>
    <div class="container mx-auto bg-gray-200 shadow-sm">
      <div
        class="flex items-center justify-between w-full px-4 py-3 text-white bg-black "
      >
        <h2 class="text-xl font-semibold tracking-wide">Creer un immeuble</h2>
        <nuxt-link
          class="px-8 py-2 font-semibold text-blue-800 bg-white rounded-md"
          to="/maison"
          >Retour</nuxt-link
        >
      </div>
      <div class="flex p-8 space-x-16">
        <div class="flex flex-col items-center justify-center border-2 border-gray-400 border-dashed rounded-md h-80 w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div class="text-center">
            <h2 class="font-sans text-xl font-semibold text-gray-600">Drop file to upload</h2>
            <p>Or</p>
            <label for="" class="inline-flex items-center px-6 text-blue-600 bg-white border border-gray-400 rounded h-9 ">
              Select files
              <input type="file" name="file" class="sr-only">
            </label>
            <p class="mt-4 text-sm text-gray-400">Maximum upload file size: 5Mb</p>
          </div>
        </div>
        <div class="flex-grow space-y-4">
          <div class="flex w-full space-x-4">
            <div class="flex-1">
            <label for="house_name" class="block text-sm text-gray-500"
              >Nom du batiment:</label
            >
            <input
              type="text"
              v-model="newHouse.name"
              id="house_name"
              placeholder="Ex: Immeuble X"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div class="w-32">
            <label for="house_name" class="block text-sm text-gray-500"
              >Nombre de niveau:</label
            >
            <input
              type="number"
              v-model.number="newHouse.niveauNumber"
              id="house_name"
              placeholder="Ex: 3"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>


             <div class="w-64">
            <label for="city" class="block mb-1 text-sm text-gray-500">Isage de l'immobilier:</label>
                <select v-model="newHouse.usage" id="" class="shadow-sm">
                  <option value="">Choisir la categorie</option>
                  <option value="gallerie">Gallerie et Commerce</option>
                  <option value="Habitation">Habitation</option>
                  <option value="Hotellerie">Hotellerie</option>
                </select>
          </div>
          </div>
          
          <div class="">
            <label for="city" class="block mb-1 text-sm text-gray-500">Ville:</label>
                <select v-model="address.city" id="">
                  <option value="">Choisir ville</option>
                  <option v-for="v in cities" :key="v.city" :value="v.city">{{v.city}}</option>
                </select>
          </div>
          
          <div class="">
            <label for="first_name" class="block text-sm text-gray-500"
              >Adresse locale:</label
            >
            <textarea
              type="text"
              v-model="address.local"
              id="first_name"
              placeholder="Rue/Avenue & numero"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div class="">
      <div class="px-16 py-5 mx-auto space-y-3">
        <div class="flex justify-end w-full py-2 space-x-6">
          <button
            @click.prevent="annuler()"
            class="w-64 px-8 py-3 font-semibold tracking-wider text-white bg-orange-600 rounded"
          >
            Annuler
          </button>
          <button
            @click.prevent="createBatiment()"
            class="w-64 px-8 py-3 font-semibold text-white bg-blue-600 rounded"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
    </div>

    
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { CITY_QUERY } from "~/apollo/company_gql";
export default {
  data(){
    return {
      newHouse: {},
      address:{
        city:"",
        local:""
      }
    };
  },
 async asyncData({app}) {
let client =app.apolloProvider.defaultClient;

      const res= await client.query({query:CITY_QUERY})
      .then(({data})=>{
        return data && data.cities;
      });
     // dispatch("getCompany");
     //commit("SET_CITY",res)

     console.log(res);
     return {
      cities:res
    }
    
    
  },
  
  methods: {
    ...mapActions({ createHouse: "batiment/createBatiment" }),
    createBatiment() {
      this.createHouse({ ...this.newHouse, address: this.address });
      this.annuler();
    },
    annuler() {
      this.newHouse = {};
      this.address = {};
    },
  },
};
</script>