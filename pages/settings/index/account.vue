<template>
  <div>
    <div class="bg-blue-800 p-4 mb-4 rounded-md text-white">
        <h1>Disponible</h1>
    </div>
    <div class="flex space-x-6 ml-2">
        <input v-model="city_field" type="text" class="w-1/2" placeholder="Entrer une ville"/>
        <button @click.prevent="addCity()" class="text-white bg-blue-700 rounded-md px-6 py-2">Ajouter ville</button>
    </div>
    <div class="ml-2">
      <h2 class="my-4 font-semibold text-lg">List de ville</h2>
      <div v-for="(v,i) in cities" :key="i"
      class="ml-1 bg-white shadow-sm px-4 py-2 rounded-md flex w-2/3 m-1 justify-between">
        <h3>{{v}}</h3>
        <button @click.prevent="deleteCity(v)" class="hover:bg-orange-200 p-1 rounded-md text-orange-600 hover:text-orange-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5   "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cities:["Butembo"],
            city_field:""
        }
    },
    methods:{
        addCity(){
            this.cities.push(this.city_field);
        },
        deleteCity(i){
            this.cities=this.cities.filter(d=>d!=i);
        }
    }
}
</script>