<template>
  <div>
    <div class="flex items-center justify-between px-4 py-2 rounded-t-md">
      <h3 class="text-xl font-bold text-blue-700">Sortie </h3>
      
    <nuxt-link class="px-6 py-2 text-white bg-red-600 rounded" to="/comptabilite/sortie">Creer sortie</nuxt-link>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  
                 id
                </th>
            
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Montant( $ )
                </th>
                
                 <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Bon (ref)
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Libele
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Reference
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <SortieCard v-for="(n, i) in sorties" :sortie="n" :key="i" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_SORTIES } from "../../../apollo/payment_gql";
import SortieCard from "../../../components/SortieCard.vue";
export default {
   
  async asyncData({app}){
      let client = app.apolloProvider.defaultClient
   const res=await client.query({query:GET_SORTIES, })
        .then(({ data }) => {
         return data && data.sorties
        })
        return {
          sorties:res
        }
  }


};
</script>