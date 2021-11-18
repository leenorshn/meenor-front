<template>
  <div class="flex space-x-4 py-6">
    <div class="w-full">
      <div class="mt-10 sm:mt-0">
        <div class>
          <div class="mt-5 md:mt-0">
            <form action="#" method="POST" class="shadow bg-white rounded-md">
              <div class="overflow-visible flex">
                <div
                  class="w-1/3 bg-gray-900 rounded-tl-md h-80 p-4 flex flex-col items-center space-y-8"
                >
                  <h3 class="text-white text-3xl">Nouveau client</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  <p class="text-gray-200">Creer un compte pour un locataire!</p>
                </div>
                <div class="px-4 py-5 flex flex-col items-start">
                  <label for class="text-gray-500">Choisir l'image du client</label>

                  <div
                    v-if="!url"
                    class="flex items-center h-64 w-72 border-2 border-dashed border-gray-400 rounded-md"
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

                  <div v-else>
                    <img :src="url" alt class="w-64 h-64 object-cover" />
                  </div>
                </div>
                <div class="px-4 py-2">
                  <div class="w-80">
                    <label for="first_name" class="block text-sm text-gray-500">Nom et postnom:</label>
                    <input
                      type="text"
                      v-model="locataire.name"
                      id="first_name"
                      placeholder="Ex: Jeanno marteau"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="w-full flex py-2">
                    <div class="w-full">
                      <label for="email_address" class="block text-sm text-gray-500">Phone:</label>
                      <input
                        type="text"
                        v-model="locataire.phone"
                        id="email_address"
                        placeholder="Ex:  +243 97823 . . 57"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div class="w-full flex py-2">
                    <div class="w-full">
                      <label for="cardId" class="block text-sm text-gray-500">N Carte d'identité:</label>
                      <input
                        type="text"
                        v-model="locataire.cardId"
                        id="cardId"
                        placeholder="Ex: numero de la carte d'electeur"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-3 bg-gray-900 rounded-b-md mt-0 text-right sm:px-6 flex space-x-4 items-center justify-end"
              >
                <button
                  @click.prevent="annuler()"
                  class="inline-flex justify-center py-2 px-20 hover:text-white bg-orange-500 shadow-sm text-sm font-medium rounded-md text-indigo-50 hover:bg-orange-700 focus:outline-none focus:ring-0"
                >Annuler</button>
                <button
                  @click.prevent="createLoc()"
                  class="inline-flex justify-center py-2 px-20 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0"
                >Valider</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/5">
      <nuxt-link to="/clients" class="px-8 py-2 text-gray-50 bg-black rounded-md">Retour</nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { IMAGE_UPLOAD_QUERY } from "~/apollo/image_gql";
export default {
  data() {
    return {
      locataire: {},
      house: "",
      url: null,
    };
  },
  computed: {},

  methods: {
    ...mapActions({ createLocataire: "house/createLocataire" }),
    createLoc() {
      this.createLocataire({
        name: this.locataire.name,
        phone: this.locataire.phone,
        avatar: this.url,
        cardId:this.locataire.cardId,
        room: this.$route.params.id,
      });
      this.annuler();
    },

    annuler() {
      this.locataire = {};
      this.url = null;
    },

    onPickFile() {
      this.$refs.fileInput.click();
    },
    async onFilePicked(event) {
      const files = event.target.files;
      if (!files) return;
      console.log(files);

      const { data } = await this.$apollo.mutate({
        mutation: IMAGE_UPLOAD_QUERY,
        variables: {
          file: files[0],
        },
        awaitRefetchQueries: true,
      });
      console.log(data);
      this.url = data.uploadFile.url;
    },
  },
};
</script>