<template>
  <div>
    <div class="container mx-auto shadow-sm bg-white">
      <div
        class="
          bg-black
          text-white
          py-2
          px-4
          w-full
          flex
          items-center
          justify-between
        "
      >
        <h2 class="font-bold tracking-wide">Nouveau</h2>
        <nuxt-link
          class="bg-blue-100 text-blue-800 px-8 py-1 rounded-md"
          to="/maison"
          >Retour</nuxt-link
        >
      </div>
      <div class="flex w-full"></div>
    </div>

    <div class="bg-white h-96">
      <div class="w-2/3 mx-auto bg-gray-200 h-96 py-5 px-16 space-y-3">
        <div class="w-80">
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
        <div class="w-80">
          <label for="city" class="block text-sm text-gray-500">Ville:</label>
          <input
            type="text"
            v-model="address.city"
            id="city"
            placeholder="Ex: Goma"
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
        <div class="w-80">
          <label for="first_name" class="block text-sm text-gray-500"
            >Adresse locale:</label
          >
          <textarea
            type="text"
            v-model="address.local"
            id="first_name"
            placeholder="Ex: Com. Xx , Av. Yy n-Z"
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
        <div class="flex py-2 w-full space-x-6 mt-28">
          <button
            @click.prevent="annuler()"
            class="px-8 py-2 rounded bg-orange-600 text-white"
          >
            Annuler
          </button>
          <button
            @click.prevent="createBatiment()"
            class="px-8 py-2 rounded bg-blue-600 text-white"
          >
            Enregistrer
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
      newHouse: {},
      address: {
        city: "",
        local: "",
      },
    };
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