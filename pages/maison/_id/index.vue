<template>
  <div>
    <div class="flex my-2 bg-white rounded-md shadow overflow-auto relative">
      <div class="h-32 w-32 flex-shrink-0">
        <img
          class="h-full w-32"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt=""
        />
      </div>
      <div class="p-4">
        <h2 class="text-2xl text-blue-800 font-bold tracking-wide">
          {{ batiment.name }}
        </h2>
        <h5 class="text-xs text-gray-400">Adresse</h5>
        <h5 class="text-base text-gray-600 font-semibold">
          {{ batiment.address.city }}/{{ batiment.address.local }}
        </h5>
      </div>
      <div
        class="p-4 flex justify-around items-center space-x-4 w-1/3 border-l-2 border-r-2 border-gray-100"
      >
        <div>
          <h5 class="text-xs text-gray-400">Niveau</h5>
          <h2 class="text-2xl text-blue-800 font-semibold tracking-wide">
            {{ batiment.totaleNiveaux }}
          </h2>
        </div>
        <div>
          <h5 class="text-xs text-gray-400">locataire</h5>
          <h2 class="text-2xl text-blue-800 font-semibold tracking-wide">{{batiment.totaleNiveaux}}</h2>
        </div>
        <div>
          <h5 class="text-xs text-gray-400">Boutique</h5>
          <h2 class="text-2xl text-blue-800 font-semibold tracking-wide">{{batiment.totalKiosques}}</h2>
        </div>
        <div>
          <h5 class="text-xs text-gray-400">Apartement</h5>
          <h2 class="text-2xl text-blue-800 font-semibold tracking-wide">{{batiment.totalApartements}}</h2>
        </div>
      </div>
      <div class="p-4 flex flex-col justify-around w-1/5">
        <div class="flex justify-between items-center w-full">
          <h2 class="text-sm text-blue-800 font-semibold tracking-wide">Actions</h2>
          <div
            class="absolute top-6 right-2 flex bg-gray-800 text-white rounded py-1 px-6 space-x-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <nuxt-link class="" to="/maison"> Retour</nuxt-link>
          </div>
        </div>
        <nuxt-link
          class="w-32 text-blue-600 text-lg inline border-b-2 border-transparent hover:border-blue-500"
          to="/"
          >Creer un niveau</nuxt-link
        >
      </div>
    </div>
    <div v-if="batiment.totaleNiveaux == 0">
      <div
        class="w-1/2 bg-white mt-16 rounded-md shadow-md mx-auto p-4 space-y-3"
      >
        <h3 class="text-gray-600 text-2xl font-semibold">Information</h3>
        <div class="flex space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-gray-700"
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
          <p class="text-gray-500 text-sm">
            Ce batiment ne contient pas encore un niveau, veillez le creer pour
            mieux gerer votre batiment.
          </p>
        </div>
        <nuxt-link
          class="w-32 text-blue-600 text-lg block border-b-2 border-transparent hover:border-blue-500"
          to="/"
          >Creer un niveau</nuxt-link
        >
      </div>
    </div>
    <div v-for="(n, i) in batiment.niveaux" :key="i">
      <h3 class="text-blue-600 text-lg mb-1">Niveau ({{ i }})</h3>
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
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Chambre
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Locataire
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Durée
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      type
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      prix/mois
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Montant payé
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
                  
                  <chambre-item v-for="(m, i) in n.kiosques" :key="i" :numero="i" />
                  <chambre-item v-for="(l, i) in n.apartements" :key="i" :numero="i" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end">
        <nuxt-link
          class="w-48 mt-1 text-blue-600 text-lg inline border-b-2 border-transparent hover:border-blue-500"
          :to="`/maison/${n.id}/newRoom`"
          >Ajouter une chambre</nuxt-link
        >
      </div>
    </div>
    <div class="h-24"></div>
  </div>
</template>

<script >
import { BATIMENT_ONE_QUERY } from "~/apollo/batiment_gql";
export default {
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: BATIMENT_ONE_QUERY,
      variables: { id: params.id },
    });
    const { batiment } = data;
    return { batiment };
  },
};
</script>