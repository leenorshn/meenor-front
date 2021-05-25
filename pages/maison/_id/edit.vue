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
              v-model="editHouse.name"
              id="house_name"
              placeholder="Ex: Immeuble X"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="w-80">
            <label for="city" class="block text-sm text-gray-500">Ville:</label>
            <input
              type="text"
              v-model="address.city"
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
              v-model="address.local"
              id="first_name"
              placeholder="Ex: Com. Xx , Av. Yy n-Z"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div class="py-2 w-full space-y-4 px-16">
          <button
            @click.prevent="editBatiment()"
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
import { EDIT_HOUSE } from "~/apollo/batiment_gql.js";
export default {
  data() {
    return {
      editHouse: {},
      address: {
          
      },
    };
  },
  methods: {
    // ...mapActions({ editBatiment: "batiment/editBatiment" }),
    async editBatiment() {
      try {
        //console.log(this.$route.params.id);
        var tt={}
        if(this.editHouse.name){
          tt.name=this.editHouse.name

        }
        if (this.address.city){
          tt.address.city=this.address.city
        }

        if (this.address.local){
          tt.address.local=this.address.local
        }
        const res = await this.$apollo
          .mutate({
            mutation: EDIT_HOUSE,
            variables: {
              id: this.$route.params.id,
              data: tt,
            },
          })
          .then(({ data }) => {
            //console.log(data);
            return data && data.updateBatiment;
          });

        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
      }
    },
    annuler() {
      this.editHouse = {};
      this.address = {};
    },
  },
};
</script>