<template>
  <div class="max-w-5xl mx-auto mt-4">
    <div
      class="relative flex justify-between overflow-auto bg-white shadow rounded-t-md"
    >
      <div class="flex-shrink-0 w-20 h-20">
        <img class="w-20 h-full" src="/../ndako.svg" alt="" />
      </div>
      <div class="p-4">
        <h2 class="text-2xl font-bold tracking-wide text-blue-800">
          {{ batiment.name }}
        </h2>
        <h5 class="text-base font-semibold text-gray-600">
          {{ batiment.address.city }}/{{ batiment.address.local }}
        </h5>
      </div>

      <div class="flex items-center p-4 space-x-4">
        <div>
          <h5 class="text-xs text-gray-400">actions</h5>
          <h5 class="text-base font-semibold text-gray-600">
            <div class="flex items-center justify-between w-full space-x-4">
              <nuxt-link
                :to="`/maison/${batiment.id}/edit`"
                class="p-2 text-blue-700 rounded-full hover:bg-blue-200"
              >
                <Icon :iconName="`pencil`" />
              </nuxt-link>
              <button
                class="p-2 text-orange-700 rounded-full hover:bg-orange-200"
              >
                <Icon :iconName="`delete`" />
              </button>
            </div>
          </h5>
        </div>
        <div v-if="!isNiveauEdit" class="flex flex-col items-end">
          <nuxt-link to="/maison" class="px-5 py-1 text-sm font-semibold bg-blue-700 rounded text-blue-50">Retour</nuxt-link>
        <button
          
          class="block w-32 text-lg text-blue-600 border-b-2 border-transparent hover:border-blue-500"
          @click.prevent="showCreateNiveau()"
        >
          Creer un niveau
        </button>
        </div>
        <div v-else>
          <input type="text" v-model="niveau" placeholder="niveau" />
          <div class="flex items-center">
            <button
              @click.prevent="saveNiveau()"
              class="block my-2 text-lg text-blue-600 border-b-2 border-transparent hover:border-blue-500"
            >
              Save
            </button>
            <button
              @click.prevent="annulNiveau()"
              class="block my-2 text-lg text-orange-600 border-b-2 border-transparent hover:border-orange-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="batiment.totaleNiveaux == 0">
      <div class="p-4 mx-auto mt-16 space-y-3 bg-white rounded-md shadow-md">
        <h3 class="text-2xl font-semibold text-gray-600">Information</h3>
        <div class="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
          <p class="text-sm text-gray-500">
            Ce batiment ne contient pas encore un niveau, veillez le creer pour
            mieux gerer votre batiment.
          </p>
        </div>
        <div  v-if="!isNiveauEdit" class="flex flex-col items-start">
          
          <button
         
          class="block w-32 text-lg text-blue-600 border-b-2 border-transparent hover:border-blue-500"
          @click.prevent="showCreateNiveau()"
        >
          Creer un niveau
        </button>
        </div>
        <div v-else class="flex items-center">
          <input type="text" v-model="niveau" placeholder="niveau" />
          <button
            @click.prevent="saveNiveau()"
            class="block my-2 text-lg text-blue-600 border-b-2 border-transparent hover:border-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <!-- <pre>{{batiment}}</pre> -->
    <div class="flex items-center justify-end"></div>
    <div v-for="(n, i) in batiment.niveaux" :key="i">
      <div class="flex justify-between mt-4">
        <h3 class="mb-1 text-sm text-blue-600">Niveau ({{ i }})</h3>
        <button @click="removeNiveau(n.id)" class="flex items-center">
          <span> effacer niveau</span>
        </button>
      </div>
      <div class="flex flex-col">
        <div class="-my-2">
          <div class="inline-block min-w-full py-2 align-middle">
            <div
              class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <tbody class="bg-white divide-y divide-gray-200">
                  <chambre-item
                    v-for="(m, f) in batiment.niveaux[i].rooms"
                    :key="f"
                    :numero="f"
                    :chambre="m"
                    :index="f"
                    :batimentId="batiment.id"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end w-full">
        <nuxt-link
          class="inline mt-1 text-sm text-blue-600 border-b-2 border-transparent w-36 hover:border-blue-500"
          :to="`/maison/${n.id}/room/newRoom`"
          >Ajouter une chambre</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { BATIMENT_ONE_QUERY } from "../../../apollo/batiment_gql";
export default {
 
  async asyncData({app,params}){
    let client = app.apolloProvider.defaultClient;
    const {data}=await client.query({query:BATIMENT_ONE_QUERY,variables: {
        id: params.id,
    },});
    let bat=data.batiment;
    return {
      batiment:bat
    }
  },
  data() {
    return {
      isNiveauEdit: false,
      niveau: "",
    };
  },
  methods: {
    ...mapActions({
      createNiveau: "house/createNiveau",
      deleteNiveau: "house/deleteNiveau",
      getHouse:"house/loadOneBatiment"
    }),
    showCreateNiveau() {
      this.isNiveauEdit = true;
      console.log("Mala");
    },
    saveNiveau() {
      this.createNiveau({
        batiment: this.batiment.id,
        name: this.niveau,
      });
      this.isNiveauEdit = false;
    },
    annulNiveau() {
      this.isNiveauEdit = false;
    },
    removeNiveau(id) {
      this.deleteNiveau({
        id,
      });
    },
  },
};
</script>