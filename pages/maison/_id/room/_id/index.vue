<template>
  <div class="flex flex-col max-w-5xl mx-auto mt-4 bg-white rounded-md shadow">
    <div class="flex items-center justify-between px-8 py-2">
      <h2>{{`chambre numero: ${room.numero}`}}</h2>
      
      <div>
        <nuxt-link 
        :to="`/maison/${getUrl}`"
         class="px-6 py-2 text-white bg-blue-500 rounded-md">Retour</nuxt-link>
      </div>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  client
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  montant
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  type
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  date
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="pay in room.payments" :key="pay.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full" :src="pay" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        victor
                      </div>
                      <div class="text-sm text-gray-500">
                        0978254387
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ pay.amount }}</div>
                  <div class="text-sm text-gray-500">{{ pay.typePayment }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    {{pay.currency}}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{ pay.createdAt }}
                </td>
                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
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