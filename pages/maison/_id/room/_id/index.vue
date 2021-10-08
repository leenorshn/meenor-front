<template>
  <div class="flex flex-col max-w-5xl mx-auto mt-4 bg-white rounded-md shadow">
    <div class="flex items-center justify-between px-8 py-4 overflow-hidden bg-blue-700 rounded-t-md">
      <h2 class="text-xl font-bold text-blue-50">{{`chambre numero: ${room.numero}`}}</h2>
      
      <div>
        <nuxt-link 
        :to="`/maison/${getUrl}`"
         class="px-6 py-2 text-white bg-blue-500 rounded-md">Retour</nuxt-link>
      </div>
    </div>
    <div class="border-b-2 border-blue-500">
      
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div v-for="(locataire ,indexT) in room.locataires" :key="indexT">

        <h2 class="px-4 py-3 ml-10 text-xl font-semibold text-blue-600">{{locataire.name}}</h2>
     
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
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
                          class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                        >
                          Montant($)
                        </th>
                        
                        <th
                          scope="col"
                          class="px-3 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                        >
                          Date debut
                        </th>
                        <th
                          scope="col"
                          class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                        >
                          Date fin
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                        >
                          Durée
                        </th>
                        
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                       
                <payment-card v-for="(pay,i) in room.locataires[indexT].payments" :key="i" :numero="i" :payment="pay" />
              
            </tbody>
          </table>
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
      }).catch(err=>console.log(err));


    return {
      room: res,
    };
  },
  computed:{
    getUrl(){
     let a= this.$route.path.split('/room/')[0];
     let b=a.split('/maison/')[1];
     console.log(b);
     return b;
    }
  }
};
</script>