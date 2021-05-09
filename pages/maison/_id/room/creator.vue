<template>
  <div class="flex space-x-4 py-6">
    <div class="w-4/5">
      <div class="mt-10 sm:mt-0">
        <div class="">
          <div class="mt-5 md:mt-0">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md bg-white">
                <div class="px-4 py-5  sm:p-6 flex items-center">
                  <label for="" class="text-gray-500"
              >Choisir l'image banniere
            </label>
            <div
              class="flex items-center h-48 w-72 border-2 border-dashed border-gray-400 rounded-md"
            >
              <div
                class="w-full h-full flex justify-center items-center inset-0 cursor-pointer bg-gray-50"
                @click="onPickFile"
              >

              <div class="flex items-start text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
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
                </div>
              </div>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
              />
            </div>
          </div>
          <div class="my-4">
          <div class="flex space-x-4">
            <div class="w-full">
              <label for=" " class="text-sm text-gray-500">Nom de la competition</label>
              <input type="text" placeholder="Ex: Boxeur doppel" />
            </div>
            <div class="w-2/3">
              <label for="category" class="text-sm text-gray-500">type</label>
              <select name="" id="category">
                <option value="">category</option>
                <option
                  :value="categ"
                  v-for="(categ, i) in categories"
                  :key="i"
                >
                  {{ categ }}
                </option>
              </select>
            </div>
          </div>
                  
                </div>
                <div class="px-4 py-3 bg-white sm:p-6">
                  <div class="flex space-x-4">
                    <div class="w-2/5">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-700"
                        >Nom et postnom:</label
                      >
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        placeholder="Ex: Jeanno marteau"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="w-1/3">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                        >Prenom:</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Depunt"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div class="w-full flex py-4 space-x-4">
                    <div class="w-2/5">
                      <label
                        for="email_address"
                        class="block text-sm font-medium text-gray-700"
                        >Phone:</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        placeholder="Ex:  +243 97823 . . 57"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="px-4 py-3 bg-white mt-10 text-right sm:px-6 flex space-x-4 items-center justify-end"
                >
                  <button
                    class="inline-flex justify-center py-2 px-20 border-2 hover:text-white bg-orange-500 shadow-sm text-sm font-medium rounded-md text-indigo-50 hover:bg-orange-700 focus:outline-none focus:ring-0"
                  >
                    Annuler
                  </button>
                  <button
                    class="inline-flex justify-center py-2 px-20 border-2 border-indigo-500 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0"
                  >
                    Valider
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    
      </div>
    </div>
    <div class="w-1/5">
      <nuxt-link
        to="/clients"
        class="px-8 py-2 text-gray-50 bg-black rounded-md"
        >Retour</nuxt-link
      >
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data(){
    return{
      room:'',
      house:''
    }
  },
  computed:{
      batiments(){
        return this.$store.state.batiment.batiments;
      },
      rooms(){
        const r= this.$store.state.batiment.batiments.find(bt=>{
          return bt.id==this.house;
        });
        console.log(r.niveaux);
      }
    
  },
  mounted(){
    this.loadBatiment();
  },
  methods:{
   ...mapActions({loadBatiment:"batiment/loadBatiment"})
  }
}
</script>