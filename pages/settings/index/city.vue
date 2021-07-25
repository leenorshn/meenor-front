<template>
  <div>
    
    <div class="ml-2">    
       
    
    <div class="flex space-x-6 ml-2">
        <input v-model="city_field" type="text" class="w-1/2" placeholder="Entrer une ville"/>
        <button @click.prevent="addCities()" class="text-white bg-blue-700 rounded-md px-6 py-2">Ajouter ville</button>
    </div>
    <div class="ml-2">
      <h2 class="my-4 font-semibold text-lg">List de ville</h2>
      <div v-for="v in cities" :key="v.id"
      class="ml-1 bg-white shadow-sm px-4 py-2 rounded-md flex w-2/3 m-1 justify-between">
        <h3>{{v.city}}</h3>
        <button @click="deleteC(v.id)" class="hover:bg-orange-200 p-1 rounded-md text-orange-600 hover:text-orange-800">
          <Icon :iconName="`delete`"/>
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      city_field: "",
    };
  },
  computed: {
    cities() {
      return this.$store.state.company.cities;
    },
  },
  

  mounted() {
    this.getCity();
  },

  methods: {
    ...mapActions({
     // getCompany: "company/getCompany",
      addCity: "company/addCity",
      getCity: "company/getCity",
      deleteCity: "company/deleteCity",
    }),
    addCities() {
      this.addCity(this.city_field);
      this.city_field = "";
    },
    deleteC(i) {
      this.deleteCity(i);
    },
  },
};
</script>