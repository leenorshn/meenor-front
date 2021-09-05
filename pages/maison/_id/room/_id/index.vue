<template>
  <div>
    <div
      class="flex items-center justify-between h-12 px-6 bg-blue-500 border-t border-gray-300 "
    >
      <h3 class="text-sm capitalize text-gray-50">Detail chambre</h3>
      <div>
        
      <nuxt-link
        class="px-5 py-2 text-sm font-bold text-white bg-black rounded-md"
        :to="`/maison/`"
        >retour</nuxt-link
      >
      </div>
    </div>
    <div class="flex w-screen">
    <!-- client list -->
    <div class="w-2/6">
      <div>List de client</div>
      <div class="list">
        
        <div v-for="(client,i) in room.locataires"
        :key="i"
        class="flex px-4 py-2 mx-4 mt-1 bg-white rounded shadow-sm">
          <div class="">

          </div>
          <div class="">
            <h2 class="text-xl font-bold text-gray-900">{{client.name}}</h2>
           <h3 class="text-xs text-gray-500">{{client.phone}}</h3>
            </div> 
        </div>
      </div>
    </div>
   
      <div class="flex-grow w-4/6 px-1 py-2 mt-2">
        <h3 class="w-full text-sm font-semibold text-blue-800">Payment du client</h3>
        <div class="min-w-full">
          <div class="inline-block py-2 align-middle">
            <div
              class="overflow-hidden border-b border-orange-200 shadow sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      class="flex justify-center px-4 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                        />
                      </svg>
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Montant
                    </th>
                    
                    <th
                      scope="col"
                      class="px-3 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                    >
                      Debut
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                    >
                      Fin
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                    >
                      Duree
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody v-if="room.locataire" class="bg-white divide-y divide-gray-200">
                  <payment-card  v-for="(n, i) in room.locataire.payments" :key="i" :numero="i" :payment="n" />
                </tbody>
              </table>
              <!-- <pre>{{user}}</pre> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_ROOM } from "~/apollo/apartement_gql.js";
export default {
  async asyncData({ app, params }) {
    const res = await app.apolloProvider.defaultClient
      .query({
        query: GET_ROOM,
        variables: {
          id: params.id,
        },
      })
      .then(({ data }) => {
        return data && data.room;
      });

      //redirect(`/maison/${res.id}/room`)

    return {
      room: res,
    };
  },
};
</script>