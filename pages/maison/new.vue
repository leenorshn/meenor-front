<template>
  <div>
    <div class="container mx-auto shadow-sm bg-gray-200">
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
      <div class="grid grid-cols-2 p-8">
        <div>
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
          <div>
            <h2>Drop file to upload</h2>
            <p>Or</p>
            <label for="">
              Select files
              <input type="file" name="file" class="sr-only">
            </label>
            <p>Maximum upload file size: 5Mb</p>
          </div>
        </div>
        <div>
          <div class="">
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
          <div class="">
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
          <div class="">
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
        </div>
      </div>
    </div>

    <div class="">
      <div class="w-2/3 mx-auto h-96 py-5 px-16 space-y-3">
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