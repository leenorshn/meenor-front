<template>
  <div class="pt-4 flex space-x-3">
    <div class="w-3/4 mb-24">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Maison
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Etage(s)
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Entité(s)
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      En expoitation
                    </th>
                    <th
                      scope="col"
                      class="text-center text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <batiment-card v-for="(bat, i) in batiments" :batiment="bat" :key="i" />

                  <!-- More people... -->
                </tbody>
              </table>
              <!-- <pre>{{batiments}}</pre> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4  rounded-md min-h-full max-h-screen">
      <div class="flex justify-center w-full items-center inset-x-0 pt-4">
        <nuxt-link
          to="/maison/creator"
          class="bg-blue-700 block text-white font-semibold text-base w-full text-center py-2 mx-4 rounded-md"
          >Créér</nuxt-link
        >
      </div>
      <div class="flex justify-center bg-white shadow items-center h-28 border border-gray-100 rounded-lg m-4 ">
          <h3 class="text-xl text-blue-800 font-semibold">{{" "+batiments.length+"  "}}<span class="text-sm text-gray-500 font-normal">Batiment(s)</span></h3>
      </div>
      <h3 class="mx-4 text-gray-500">Vous pouvez faire une selection basé sur des criteres ci-dessous:</h3>
        <div class="flex flex-col mx-4 my-3">
            <label for="city" class="text-sm text-gray-400">Par ville</label>
            <select class="text-sm shadow" name="" id="city">
                <option value="">Toutes</option>
                <option  v-for="(city,i) in cities" :key="i" :value="city">{{city}}</option>
            </select>
        </div>
        <div class="flex flex-col mx-4 my-3">
            <label for="etage" class="text-sm text-gray-400">Par niveau</label>
            <select class="text-sm shadow" name="" id="etage">
                <option value="">Pas d'etage</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">plus</option>
            </select>
        </div>
    </div>
  </div>
</template>
<script>

import { mapState,mapActions } from "vuex";
export default {
  middleware:'isAuth',
    data(){
        return{
           cities:[]
        }
    },
    mounted(){
    this.loadBatiment()
    },
    computed:{
     // ...mapState({batiments:'batiment/batiments'}),
      batiments(){
        return this.$store.state.batiment.batiments;
      }
    },
    methods:{
      ...mapActions({loadBatiment:"batiment/loadBatiment"})
    }
}
</script>