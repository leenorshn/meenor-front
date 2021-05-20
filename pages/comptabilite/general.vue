<template>
  <div>
    <div class="flex justify-between items-center px-4 py-2 rounded-t-md">
      <h3 class="text-xl text-blue-700 font-bold">Mouvement compte</h3>
      <div class="flex items-center space-x-8">
        <div>
          <h6 class="text-xs text-gray-500">Entré</h6>
          <h4 class="text-lg text-blue-700 font-bold">
            <span class="text-gray-500 text-sm font-normal"> $</span> {{entree}}
          </h4>
        </div>
        <div>
          <h6 class="text-xs text-gray-500">Sortie</h6>
          <h4 class="text-lg text-red-700 font-bold">
            <span class="text-gray-500 text-sm font-normal"> $</span> 0
          </h4>
        </div>
        <div>
          <h6 class="text-xs text-gray-500">Solde</h6>
          <h4 class="text-lg text-green-700 font-bold">
            <span class="text-gray-500 text-sm font-normal"> $</span> {{entree}}
          </h4>
        </div>
      </div>
    </div>
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-3">
        <div class="border-t-2 border-gray-200"></div>
      </div>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
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
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Operation
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Montant( $ )
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Compte
                </th>
                 <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <payment-item v-for="(n, i) in payments" :item="n" :key="i" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_PAYMENTS } from "~/apollo/payment_gql";
export default {
  layout: "account",
 async asyncData({app}){
   const payments=await  app.apolloProvider.defaultClient.query({ query: GET_PAYMENTS })
        .then(({ data }) => {
          return data && data.payments;
        });
    //console.log(data);
    return {
      payments
    }
  },
  // apollo:{
  //   payments:{
  //     query:GET_PAYMENTS
  //   }
  // },
  computed:{
    entree(){
      var msgTotal = this.payments.reduce(function(prev, cur) {
  return prev + cur.amount;
}, 0);
return msgTotal;
    }
  }


};
</script>