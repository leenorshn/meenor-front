<template>
  <div>
    <div class="container mx-auto shadow-sm bg-gray-200">
      <div
        class="
          bg-black
          text-white
          py-3
          px-4
          w-full
          flex
          items-center
          justify-between
        "
      >
        <h2 class="font-semibold tracking-wide text-xl">Creer un immeuble</h2>
        <nuxt-link
          class="bg-white text-blue-800 px-8 py-2 font-semibold rounded-md"
          to="/maison"
          >Retour</nuxt-link
        >
      </div>
      <div class="flex p-8 space-x-16">
        <div class="flex flex-col justify-center h-80 w-96 items-center border-2 border-dashed border-gray-400 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-gray-500"
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
            <h2 class="text-xl text-gray-600 font-sans font-semibold">Drop file to upload</h2>
            <p>Or</p>
            <label for="" class="bg-white text-blue-600 h-9 px-6 inline-flex 
            items-center rounded
            border border-gray-400
            ">
              Select files
              <input type="file" name="file" class="sr-only">
            </label>
            <p class="text-sm text-gray-400 mt-4">Maximum upload file size: 5Mb</p>
          </div>
        </div>
        <div class="flex-grow space-y-4">
          <div class="flex space-x-4 w-full">
            <div class="flex-1">
            <label for="house_name" class="block text-sm text-gray-500"
              >Nom du batiment:</label
            >
            <input
              type="text"
              v-model="newHouse.name"
              id="house_name"
              placeholder="Ex: Immeuble X"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>


             <div class="w-64">
            <label for="city" class="block mb-1 text-sm text-gray-500">Isage de l'immobilier:</label>
                <select name="" id="" class="shadow-sm">
                  <option value="">Choisir la categorie</option>
                  <option value="gallerie">Gallerie et Commerce</option>
                  <option value="Habitation">Habitation</option>
                  <option value="Hotellerie">Hotellerie</option>
                </select>
          </div>
          </div>
          
          <div class="">
            <label for="city" class="block mb-1 text-sm text-gray-500">Ville:</label>
                <select name="" id="">
                  <option value="">Choisir ville</option>
                  <option v-for="v in cities" :key="v.id" :value="v.id">{{v.city}}</option>
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
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
        </div>
      </div>
      <div class="">
      <div class="mx-auto py-5 px-16 space-y-3">
        <div class="flex py-2 w-full space-x-6 justify-end">
          <button
            @click.prevent="annuler()"
            class="w-64 px-8 py-3 rounded font-semibold tracking-wider bg-orange-600 text-white"
          >
            Annuler
          </button>
          <button
            @click.prevent="createBatiment()"
            class="w-64 px-8 py-3 rounded font-semibold bg-blue-600 text-white"
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
  data() {
    return {
      newHouse: {},
      address:{
        city:"",
        local:""
      }
    };
  },
  apollo:{
    cities:{
      query:CITY_QUERY
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